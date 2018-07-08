export const company =  (_, req) => {
    // todo- 処理実装
    if (req.id === 123) {
        return {id: "123", name: "google (ガチデータ)"}
    }
    return {id: "", name: ""}
}
