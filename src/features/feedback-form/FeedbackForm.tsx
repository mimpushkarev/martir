import {memo, useState} from 'react';

import {Button} from '_shared/button';
import Select from '_shared/select';
import TextField from '_shared/text-field';

type FeedbackFormPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const FeedbackForm = memo<FeedbackFormPropsType>(function FeedbackForm({isOpen, onClose}) {
  if (!isOpen) {
    return null;
  }

  const handleClose = e => {
    if (e.target.id === 'wrapper') {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-common-bg bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-1/4 bg-common-bg p-4">
        <div className="border-b border-common-gray">
          <p className="pb-3 text-paragraph-2">Связаться с нами</p>
        </div>
        <form action="" method="post" className="flex flex-col gap-4 pt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="input">Фамилия Имя Отчество</label>
            <TextField value={''} placeholder="Ф.И.О"></TextField>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type of communication">Удобный способ связи</label>
            <Select
              options={[
                {
                  id: 'email',
                  optionTitle: 'Email'
                },
                {
                  id: 'Telegram',
                  optionTitle: 'Telegram'
                },
                {
                  id: 'phone',
                  optionTitle: 'Номер телефона'
                }
              ]}
              id="type of communication"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="input">Номер телефона</label>
            <TextField value={''} placeholder="+X (XXX) XXX-XXXX" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="input">Email</label>
            <TextField value={''} placeholder="example@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="input">Ник в Telegram</label>
            <TextField value={''} placeholder="@username" />
          </div>
          <div className="flex flex-col gap-2 pb-3">
            <label htmlFor="input">Вопрос или пожелание</label>
            <TextField value={''} placeholder="Введите Ваш вопрос здесь..." className="h-24 items-start" />
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-common-gray pt-3">
            <Button type="outlined" onClick={onClose}>
              Отменить
            </Button>
            <Button type="primary">Отправить</Button>
          </div>
        </form>
      </div>
    </div>
  );
});
export {FeedbackForm};
