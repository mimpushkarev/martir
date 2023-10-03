import {Form, Formik, FormikHelpers} from 'formik';
import {memo} from 'react';

import {Button} from '_shared/button';
import {Input} from '_shared/input';
import {Modal, ModalBody, ModalFooter, ModalHeader} from '_shared/modal';
import {Select} from '_shared/select';
import {TextArea} from '_shared/text-area';

type FeedbackFormPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const optionsForCommynication = [
  {
    label: 'Телеграм',
    value: 'Telegram'
  },
  {
    label: 'Номер телефона',
    value: 'phone'
  },
  {
    label: 'Электронная почта',
    value: 'Email'
  }
];

interface Values {
  name: string;
  phoneNumber: string;
  email: string;
  telegram: string;
  question: string;
}

const FeedbackForm = memo<FeedbackFormPropsType>(function FeedbackForm({isOpen, onClose}) {
  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        email: '',
        telegram: '',
        question: '',
        typeOfCommunication: ''
      }}
      onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader title={'Связаться с нами'} />
        <ModalBody>
          <Form>
            <div className="flex flex-col gap-4 pt-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Фамилия Имя Отчество</label>
                <Input id="name" name="name" placeholder="Ф.И.О" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="type of communication">Удобный способ связи</label>
                <Select
                  options={optionsForCommynication}
                  id="typeOfCommunication"
                  name="typeOfCommunication"
                  placeholder="Способ связи"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Номер телефона</label>
                <Input id="phoneNumber" name="phoneNumber" placeholder="+7 (000) 000-0000" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" placeholder="youremail@martir.ru" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="telegram">Логин в Telegram</label>
                <Input id="telegram" name="telegram" placeholder="@username" />
              </div>
              <div className="flex flex-col gap-2 pb-3">
                <label htmlFor="question">Вопрос или пожелание</label>
                <TextArea name="question" id="question" placeholder="Ваш вопрос здесь..." className="h-24"></TextArea>
              </div>
            </div>
            <ModalFooter>
              <Button type="outlined" onClick={onClose}>
                Отменить
              </Button>
              <Button type="primary">Отправить</Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </Formik>
  );
});
export {FeedbackForm};
