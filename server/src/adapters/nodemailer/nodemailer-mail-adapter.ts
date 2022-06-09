import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bb97526c534ef3",
        pass: "51454deaac33f6"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <jeanluca554@hotmail.com',
            to: 'Jean <sjeanluca@gmail.com>',
            subject: subject,
            html: body,
        });
    };
}