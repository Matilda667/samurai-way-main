type PropsType = {
    title: string
    onClick?: () => void; // Добавляем обработчик клика
}

export const Button = ({ title, onClick }: PropsType) => {
    return <button onClick={onClick}>{title}</button>;
};