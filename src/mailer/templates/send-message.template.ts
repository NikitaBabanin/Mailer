import { TemplateId } from '../constants';

export default class SendMessageTemplate {
  private readonly userName: string;
  private readonly userEmail: string;
  private readonly userPhone: string;
  private readonly subject: string;
  private readonly message: string;

  constructor(data: {
    userName: string;
    userEmail: string;
    userPhone: string;
    subject: string;
    message: string;
  }) {
    this.userName = data.userName;
    this.userEmail = data.userEmail;
    this.userPhone = data.userPhone;
    this.subject = data.subject;
    this.message = data.message;
  }

  public getOptions() {
    return {
      to: 'babanin.myke@gmail.com',
      from: 'babanin.nikitaa@gmail.com',
      templateId: TemplateId.SendMessage,
      dynamicTemplateData: {
        userName: this.userName,
        userEmail: this.userEmail,
        userPhone: this.userPhone,
        subject: this.subject,
        message: this.message,
      },
    };
  }
}
