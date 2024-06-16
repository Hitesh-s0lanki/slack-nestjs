import { Injectable } from '@nestjs/common';
import { CreateSlackDto } from './dto/create-slack.dto';
import { UpdateSlackDto } from './dto/update-slack.dto';
import { WebClient } from '@slack/web-api';
import { SendSlackMessageDto } from './dto/send-slack-message.dto';

@Injectable()
export class SlackService {

  private readonly slackClient: WebClient;

  constructor() {
    this.slackClient = new WebClient(process.env.SLACK_TOKEN);
  }

  sendMessage(sendSlackMessageDto: SendSlackMessageDto) {
    return this.slackClient.chat.postMessage(sendSlackMessageDto);
  }

  async readMessages(channel: string) {
    const response = await this.slackClient.conversations.history({
      channel,
    });
    return response.messages;
  }

  create(createSlackDto: CreateSlackDto) {
    return 'This action adds a new slack';
  }

  findAll() {
    return `This action returns all slack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} slack`;
  }

  update(id: number, updateSlackDto: UpdateSlackDto) {
    return `This action updates a #${id} slack`;
  }

  remove(id: number) {
    return `This action removes a #${id} slack`;
  }
}
