import { MessageDTO } from "../api/dto/message-DTO";
import { Message } from "../model/Message";

export function mapSuccess(dto: MessageDTO): Message {
  return {
    message: dto.message,
  };
}
