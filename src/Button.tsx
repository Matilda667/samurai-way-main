type PropsType = {
    title: string
    onClickHandler?: () => void; // Добавляем обработчик клика
    disabled?:boolean
}

export const Button = ({ title, onClickHandler,disabled }: PropsType) => {
    return <button disabled={disabled} onClick={onClickHandler}>{title}</button>;
};