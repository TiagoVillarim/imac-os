import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style";


const Section = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            email: '',
            text: ''
        }
    });

    const [form, setForm] = useState([]);

    useEffect(() => {
        console.log(form)
    }, [form]);

    const onSubmit = (data) => {
        setForm([...form, data]);
        reset()
    };

    const handleRemoveItem = (e) => {
        const email = e.target.getAttribute("removeItem")
        setForm(form.filter(item => item.email !== email));
    };

    return (
        <React.Fragment>
            <S.Container>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Input
                        margin="50px"
                        height="20px"
                        type="email"
                        {...register("email",
                            {
                                required: "this is required",
                                minLength: 5
                            })}
                        placeholder="type your email:"
                    />
                    {errors.email?.message}
                    <S.Textarea
                        type="text"
                        {...register("text",
                            {
                                required: "this is required",
                                minLength: { value: 4, message: "this is required" },
                                maxLength: 200
                            })}
                        placeholder="type here:"
                    />
                    {errors.text?.message}
                    <S.Input
                        margin="20px"
                        type="submit"
                        value="submit"
                        cursor="pointer"
                    />
                </S.Form>
                <div>
                    {form.map((itens, index) => {
                        return (
                            <div key={index}>
                                <p>{itens.email}</p>
                                <p>{itens.text}</p>
                                <button removeitem={itens.email} onClick={(e) => handleRemoveItem(e)}>delete</button>
                            </div>
                        )
                    })}
                </div>
            </S.Container>
        </React.Fragment>
    )
};

export default Section;