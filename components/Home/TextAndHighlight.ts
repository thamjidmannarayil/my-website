export type task = [{ text: string; keywords: string[] }];

export const getTextWithHighlightedKeyword = (text: string, keyword: string[] | []) => {
    if (keyword.length > 0) {
        const regex = new RegExp(keyword.join("|"), "gi");
        console.log("regex", regex);
        return text.replace(regex, match => `<span class="text-AAsecondary keyword-hover">${match}</span>`);
    }
    return text;
};
