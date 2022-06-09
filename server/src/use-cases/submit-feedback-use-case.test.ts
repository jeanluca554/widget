import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    // { create: async () => { } },
    // { sendMail: async () => { } }

    // com os Spies:

    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {


        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,5a4sdf465s46df54a5s4df'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not  be able to submit a feedback without type', async () => {


        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,5a4sdf465s46df54a5s4df'
        })).rejects.toThrow();
    });

    it('should not  be able to submit a feedback without comment', async () => {


        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,5a4sdf465s46df54a5s4df'
        })).rejects.toThrow();
    });

    it('should not  be able to submit a feedback with an invalid screenshot', async () => {


        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'tá tudo bugado',
            screenshot: '5a4sdf465s46df54a5s4df'
        })).rejects.toThrow();
    });
});