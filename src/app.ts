import express from 'express';
import { createConnection } from "typeorm";
import apiv1Router from "./apps/v1/apiv1-router";

class InitApp {
  public app: express.Application;
  public config: any;

  constructor() {
      this.app = express();
      this.config = {
        port: 3000
      }
  }

  private InitController(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello world default Page');
    });
    this.app.use('/v1', apiv1Router);
  }

  private async InitPostgresDB() {
    try {
      await createConnection();
      console.log('Connect database success!');
    } catch (error) {
      console.log(`Connect database error !`);
      console.log(error);
    }
  }

  public async ExecuterEx(): Promise<void> {
    await this.InitController();
    await this.InitPostgresDB();

    this.app.listen(this.config.port, () => 
      console.log(`Server listening on port ${this.config.port}`)
    );
  }
}

let exService = new InitApp();
exService.ExecuterEx().then(() => {
  console.log("Init solution ok");
}).catch((err) => {
  console.log(`Init Error : ${err}`);
});