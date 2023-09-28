import {useState} from 'react';

import {FeedbackForm} from '_features/feedback-form';
import {Accordeon} from '_shared/accordeon';
import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {Copy} from '_shared/copy';
import {Link} from '_shared/link';

function FAQ() {
  const [_isOpen, setIsOpen] = useState(false);
  return (
    <Container px={6} className="py-24" width="large">
      <h1 className="text-page-title uppercase">Контакты</h1>
      <div className="mt-10 text-paragraph [&>*]:mb-6">
        <Accordeon title="Информация по товарам" opened>
          <div className="[&>*]:mb-2">
            <p>
              <b>Телефон:</b> <Copy>+7(999)999-99-99</Copy>
            </p>
            <p>
              <b>Email:</b> <Copy>products_martir.ru</Copy>
            </p>
            <p>
              <b>Адресс:</b> Где-то куда-то я еще не знаю
            </p>
          </div>
        </Accordeon>
        <Accordeon title="Информация по покупкам">
          <div className="[&>*]:mb-2">
            <p>
              Если у вас возникли вопросы по оформлению заказа, оплате, доставке или гарантии, или вы просто хотите
              узнать больше о нашей продукции, не стесняйтесь обращаться к нам.
            </p>
            <p>
              Вы также можете отслеживать статус выполнения своего заказа, чтобы всегда быть в курсе процесса и не
              беспокоиться о его местонахождении. Для этого вам нужно указать номер заказа в форме проверки заказов на
              странице{' '}
              <Link to="/orders" target="_blank">
                заказов
              </Link>
              .
            </p>
            <p>
              Если у вас возникнут вопросы, пожалуйста, свяжитесь с нашей службой поддержки, написав на адрес
              support_martir.ru. Наши специалисты постараются ответить как можно скорее и предоставить всю необходимую
              информацию. Мы готовы помочь вам с любыми вопросами, которые у вас могут возникнуть, чтобы обеспечить
              максимально приятный и удобный опыт покупки и использования наших продуктов.
            </p>
          </div>
        </Accordeon>
        <Accordeon title="Обратная связь">
          <div className="[&>*]:mb-2">
            <p>
              Если у вас есть какие-либо вопросы или комментарии относительно наших продуктов или услуг, пожалуйста,
              свяжитесь с нами. Мы всегда рады услышать ваше мнение и готовы помочь вам решить любые проблемы, которые у
              вас могут возникнуть.
            </p>
            <p>
              Вы можете связаться с нами по электронной почте info_martir.ru или заполнить форму обратной связи на нашем
              сайте{' '}
              <Link to="/" target="_blank">
                martir.ru
              </Link>
              . Мы постараемся ответить вам как можно скорее, чтобы обеспечить максимально приятный и удобный опыт
              работы с нашей компанией.
            </p>
            <p>
              Если у вас возникнут вопросы, пожалуйста, свяжитесь с нашей службой поддержки, написав на адрес
              support_martir.ru. Наши специалисты постараются ответить как можно скорее и предоставить всю необходимую
              информацию. Мы готовы помочь вам с любыми вопросами, которые у вас могут возникнуть, чтобы обеспечить
              максимально приятный и удобный опыт покупки и использования наших продуктов.
            </p>
          </div>
        </Accordeon>
      </div>
      <h2 className="mb-4 mt-10 text-page-title uppercase">Остались вопросы?</h2>
      <div className="flex items-center justify-between">
        <p>Заполните форму обратной связи и мы свяжемся с Вами.</p>
        <Button
          type="primary"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Заполнить!
        </Button>
      </div>
      <FeedbackForm
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </Container>
  );
}

export default FAQ;
