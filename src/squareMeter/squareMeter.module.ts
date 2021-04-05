import { Module, HttpModule } from "@nestjs/common";
import { SquareMeterService } from "./squareMeter.service";

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [SquareMeterService],
    exports: [SquareMeterService]
})
export class SquareMeterModule { }