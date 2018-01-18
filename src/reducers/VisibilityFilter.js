const VisibilityFilter = (state="ALL",action) => {
    switch(action.filter){
        case "SHOW_COMPLETED":
            return state = "COMPLETED";
        case "SHOW_ACTIVE":
            return state = "ACTIVE";
        default:
            return state = "ALL";
    }
}
export default VisibilityFilter;