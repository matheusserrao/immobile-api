import { Module, HttpModule } from "@nestjs/common";
import { ValueController } from "./value.controller";
import { ValueService } from "./value.service";
import { SquareMeterService } from "src/squareMeter/squareMeter.service";
import { SquareMeterModule } from "src/squareMeter/squareMeter.module";

@Module({
    imports: [
        SquareMeterModule
    ],
    controllers: [ValueController],
    providers: [ValueService],
    exports: []
})
export class ValueModule { }