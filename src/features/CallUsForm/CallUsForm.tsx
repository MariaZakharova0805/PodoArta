import { useForm, SubmitHandler } from "react-hook-form";
import c from "./CallUsForm.module.css"
import { Button } from "../../shared/ui/Button__green/Button";
import { HeaderH2 } from "../../shared/ui/Headers/HeaderH2";


type Inputs = {
    name: string,
    phone: string,
};

export default function CallUsForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("name")) // watch input value by passing the name of it

    return (
        <div className={c.body}>
            <HeaderH2>Запишитесь на прием</HeaderH2>
            <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
                <div className={c.form_block}>
                    <p className={c.form_header}>Номер телефона</p>
                    <input placeholder="Ваше ФИО" {...register("name")} className={c.input} />
                </div>

                <div className={c.form_block}>
                    <p className={c.form_header}>Ваше имя</p>
                    <input placeholder="+7 (   )  -  -" {...register("phone", { required: true })} className={c.input} />
                    {errors.phone && <span className={c.error}>Введите номер телефона</span>}
                </div>

                <div className={c.form_block}>
                    <Button width="100%">отправить</Button></div>

            </form></div>
    );
}