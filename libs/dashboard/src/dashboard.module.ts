import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { AdminModule } from "@adminjs/nestjs";
import { ConfigModule } from "@nestjs/config";
import { entities_bank, entities_company } from "@app/entities";
import AdminJS from "adminjs";
import * as AdminJSTypeorm from "@adminjs/typeorm";

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});

const DEFAULT_ADMIN = {
  email: "test",
  password: "test",
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const resources = [...entities_bank, ...entities_company];

console.log(resources);

@Module({
  imports: [
    AdminModule.createAdmin({
      adminJsOptions: { rootPath: "/admin", resources: resources },
      auth: {
        authenticate: authenticate,
        cookieName: "adminjs",
        cookiePassword: "secret",
      },
      sessionOptions: {
        resave: true,
        saveUninitialized: true,
        secret: "secret",
      },
    }),
    ConfigModule.forRoot(),
  ],
  providers: [DashboardService],
  exports: [DashboardService, AdminModule],
})
export class DashboardModule {}
