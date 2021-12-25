## FHIR DATABASE

FHIR resources will be saved on a provided database. Currently firehose supports a MongoDB or MySQL database with schemas maching the default FHIR resource structure provided in the FHIR website.

The database connections and management is done using the Prisma Client.

However, if you want to incoporate an existing database you will have to wirte an adaotor (if an adator is already provided, you will have to modify it)

The adaptor will function as an intermediate between the FHIR server and FHIR resources, mapping the exisitng database columns and tables to the FHIR resouce elements.

Since an exisiting database is always different from one system to another there is no one adaptor that fits every system. Either an adaptor has to be created or exisitng ones should be modified.

An adaptor is not required when working with the default FHIR shcema maching database created by firehose.

Please contact via arkruka@gmail.com to create an adaptor for your organization or for support.

**This documentation and project is still on going and may change rapidly**
