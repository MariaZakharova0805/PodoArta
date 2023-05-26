import { FC, useEffect } from "react";
import c from "./FeedBackForm.module.css";
import { useFeedBackForm } from "../../shared/store";
import { Button } from "../../shared/ui/Button__green/Button";
import { useForm } from 'react-hook-form';
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";

export const FeedBackForm:FC = () => {
  const { visible, setVisible, clientData, setClientData } = useFeedBackForm((state) => state);
  const {
    register,
    watch,
    reset,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      surname: "",
      lastName: "",
      phone: '',
      email: '',
      text: '',
    }
  });

  const empty = {
    name: "",
    surname: "",
    lastName: "",
    phone: "",
    email: "",
    text: "",
  };

  /* @ts-ignore */
  useEffect((value) => {
    setClientData(value);
  }, [watch]);

  const rootClasses = [c.myAlert];
  if (visible) {
    rootClasses.push(c.active);
  }

  const onSubmit = () => {
    reset(empty);
    clearErrors();
    setVisible(false);
    console.log(clientData);
  };

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
          <div className={c.input}>
            <HeaderH2>Написать нам</HeaderH2>
          </div>

          <div className={c.input}>
            <input {...register('name', { required: true, pattern: /[а-яА-ЯёЁa-zA-Z]/i })} placeholder="Имя ★" />
            {errors.name && <p className={c.error}>введите имя</p>}
          </div>

          <div className={c.input}>
            <input {...register('surname', { required: true, pattern: /[а-яА-ЯёЁa-zA-Z]/i })} placeholder="Фамилия ★" />
            {errors.surname && <p className={c.error}>введите имя</p>}
          </div>

          <div className={c.input}>
            <input {...register('lastName')} placeholder="Отчество" />
          </div>

          <div className={c.input}>
            <input {...register('phone', { required: true, pattern: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/i })} placeholder="телефон ★" />
            {errors.phone && <p className={c.error}>введите телефон</p>}
          </div>

          <div className={c.input}>
            <input {...register('email', { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ })} placeholder="Эл.почта" />
          </div>

          <div className={c.textfiled}>
            <input {...register('text')} placeholder="Ваше сообщение" className={c.textfiled_input}/>
          </div>

          <div className={c.btn}><Button width="100%">отправить</Button></div>
        </form>
      </div>
    </div>
  );
};
