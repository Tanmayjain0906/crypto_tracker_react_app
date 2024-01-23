export default function convertDate(number)
{
    const date = new Date(number);
    return date.getDate() + "/" + (date.getMonth()+1);
}