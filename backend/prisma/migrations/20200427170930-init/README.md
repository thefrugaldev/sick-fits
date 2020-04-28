# Migration `20200427170930-init`

This migration has been generated at 4/27/2020, 5:09:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."User" (
    "id" TEXT NOT NULL  ,
    "name" TEXT NOT NULL  ,
    PRIMARY KEY ("id")
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200427170930-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url      = "file:dev.db"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id    String @default(cuid()) @id
+  name  String
+}
```


