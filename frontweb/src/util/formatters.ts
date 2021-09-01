export const formatPrice = (price: number) => {
    //maximo e minimo de digitos fracionados após a virgula
    const params = {maximumFractionDigits: 2, minimumFractionDigits: 2};

    return new Intl.NumberFormat('pt-BR', params).format(price);
}