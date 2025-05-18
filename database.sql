-------------------------------------------------------
--------------------------------------------------
-- START FROM SCRATCH:
DROP TRIGGER IF EXISTS "on_user_update" ON "user";
DROP TABLE IF EXISTS "user";


-------------------------------------------------------
--------------------------------------------------
-- TABLE SCHEMAS:
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE contact (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name character varying NOT NULL,
    email character varying NOT NULL,
    message character varying(1000) NOT NULL,
    "timeSent" date NOT NULL,
    responded boolean DEFAULT false,
    is_archived boolean DEFAULT false
);

CREATE TABLE "photo"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NULL,
    "cloudinary_url" VARCHAR(1500) NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT '0',
    "added_day" TIMESTAMP(0) WITH
        TIME zone NULL
);
ALTER TABLE
    "photo" ADD PRIMARY KEY("id");
ALTER TABLE
    "photo" ADD CONSTRAINT "photo_user_id_unique" UNIQUE("user_id");
CREATE TABLE "video"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NULL,
    "title" VARCHAR(300) NOT NULL,
    "artist" BIGINT NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT '0',
    "added_day" TIMESTAMP(0) WITH
        TIME zone NOT NULL,
        "youtube_link" VARCHAR(1000) NOT NULL
);
ALTER TABLE
    "video" ADD PRIMARY KEY("id");
ALTER TABLE
    "video" ADD CONSTRAINT "video_user_id_unique" UNIQUE("user_id");
ALTER TABLE
    "photo" ADD CONSTRAINT "photo_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");
ALTER TABLE
    "video" ADD CONSTRAINT "video_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");



-------------------------------------------------------
--------------------------------------------------
-- SEED DATA:
--   You'll need to actually register users via the application in order to get hashed
--   passwords. Once you've done that, you can modify this INSERT statement to include
--   your dummy users. Be sure to copy/paste their hashed passwords, as well.
--   This is only for development purposes! Here's a commented-out example:
-- INSERT INTO "user"
--   ("username", "password")
--   VALUES
--   ('unicorn10', '$2a$10$oGi81qjXmTh/slGzYOr2fu6NGuCwB4kngsiWQPToNrZf5X8hxkeNG'), --pw: 123
--   ('cactusfox', '$2a$10$8./c/6fB2BkzdIrAUMWOxOlR75kgmbx/JMrMA5gA70c9IAobVZquW'); --pw: 123


-------------------------------------------------------
--------------------------------------------------
-- AUTOMAGIC UPDATED_AT:

-- Did you know that you can make and execute functions
-- in PostgresQL? Wild, right!? I'm not making this up. Here
-- is proof that I am not making this up:
  -- https://x-team.com/blog/automatic-timestamps-with-postgresql/

-- Create a function that sets a row's updated_at column
-- to NOW():
CREATE OR REPLACE FUNCTION set_updated_at_to_now() -- 👈
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger on the user table that will execute
-- the set_update_at_to_now function on any rows that
-- have been touched by an UPDATE query:
CREATE TRIGGER on_user_update
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE set_updated_at_to_now();
