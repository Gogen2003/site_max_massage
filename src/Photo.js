import {useForm} from 'react-hook-form';
import {TextField} from '@mui/material'
import axios from 'axios';
import {Button} from '@mui/material'
import { TextareaAutosize } from '@mui/material';

function Photo() {
    const {
        register, // регистрирует поля для формы
        formState: {   // создает различные свойства
            errors,
        },
        handleSubmit,
    } = useForm();
    const mySubmit = () => {
        let message = `<b>Имя: ${document.getElementById('tg').Name.value}</b>\n`;
        message += `<b>Номер: ${document.getElementById('tg').Number.value} </b>`
    

        axios.post(`https://api.telegram.org/bot5824953890:AAGY21BTD06sGC-pLjDhV6CV5RVZFgqzkcQ/sendMessage`, {
            chat_id : "-1001964388457",
            parse_mode: 'html',
            text: message
    })
    }
    return (
        // добавляем register и в него диструктуризацию чтобы получить сразу в него все методы
        <>
            <form  id='tg' onSubmit={handleSubmit(mySubmit)}>
                <div style={{marginBottom: "25px", marginTop: "25px"}}>
                    <TextField fullWidth name='Name' {...register("Name", {
                        required: "Заполните поле",
                        minLength: {
                            value: 5,
                            message: "Введено больше 5 символов!"
                        }
                    })} type='text' id="standard-basic" label="Name" variant="standard" /> 
                </div>
                    
                
                    <TextField fullWidth name='Number' {...register("Number", {
                        required: "Заполните поле",
                        minLength: {
                            value: 11,
                            message: "Введено больше 11 символов!"
                        }
                    })} type='text' id="standard-basic" label="Number"  variant="standard" />
                    <div> <TextareaAutosize sx={{mb: "25px", mt: "25px"}}  /> </div>
                
                
                <Button type = 'submit' sx={{borderRadius: '5px', background: 'black', mt: '25px'}} variant="contained">ОТПРАВИТЬ </Button>

                <div>
                    {errors?.Name && <p>{errors?.Name.message}</p>}
                </div>
            </form>
        </>
    )
}
export default Photo;

