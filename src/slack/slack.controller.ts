import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SlackService } from './slack.service';
import { CreateSlackDto } from './dto/create-slack.dto';
import { UpdateSlackDto } from './dto/update-slack.dto';
import { SendSlackMessageDto } from './dto/send-slack-message.dto';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) { }

  @Post('send')
  @UsePipes(new ValidationPipe())
  async sendMessage(@Body() sendSlackMessageDto: SendSlackMessageDto): Promise<string> {
    await this.slackService.sendMessage(sendSlackMessageDto);
    return 'Message sent to Slack!';
  }

  @Get('read/:channel')
  async readMessages(@Param('channel') channel: string) {
    console.log(channel)
    const messages = await this.slackService.readMessages(channel);
    return messages;
  }


  @Post()
  create(@Body() createSlackDto: CreateSlackDto) {
    return this.slackService.create(createSlackDto);
  }

  @Get()
  findAll() {
    return this.slackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlackDto: UpdateSlackDto) {
    return this.slackService.update(+id, updateSlackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slackService.remove(+id);
  }
}
