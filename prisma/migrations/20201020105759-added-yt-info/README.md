# Migration `20201020105759-added-yt-info`

This migration has been generated by Abner Rodrigues at 10/20/2020, 7:57:59 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Song" ADD COLUMN     "youtubeID" TEXT;
ALTER TABLE "Song" ADD COLUMN     "albumCoverUrl" TEXT

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Artist" ("id", "name") SELECT "id", "name" FROM "Artist";
DROP TABLE "Artist";
ALTER TABLE "new_Artist" RENAME TO "Artist";
CREATE UNIQUE INDEX "Artist.name_unique" ON "Artist"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201020105759-added-yt-info
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Song {
+  id            Int     @id @default(autoincrement())
+  name          String
+  youtubeID     String?
+  albumCoverUrl String?
+  artist        Artist? @relation(fields: [artistId], references: [id])
+  artistId      Int?
+}
+
+model Artist {
+  id    Int    @id @default(autoincrement())
+  name  String @unique
+  songs Song[]
+}
```


