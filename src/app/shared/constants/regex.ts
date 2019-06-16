export const regex = {
    amount: '^[0-9]\\d*([\\.,]\\d+)?$',
    digit: '^[0-9]*$',
    iban: /^FR[a-zA-Z0-9]{25}$/,
    charactersDigitsWithoutSpecialChars: /^[a-zA-Zéèàçùâêîäëïü0-9']+$/
};
