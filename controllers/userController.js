import routes from "../routes"

export const getJoin = (req,res) => {
    res.render("join",{pageTitle:"join"});
}
export const postJoin =(req,res) => {
    const {
        body: {name,email,password,password2}
    } =  req;
    if(password !== password2){
        res.status(400);
        res.render(routes.join,{pageTitle:"join"});
    }else{
        // To do: Register user
        // To do: Log user in 
        res.redirect(routes.home)
    }

}
export const getlogin = (req,res) => res.render("login",{pageTitle:"Log In"});
export const postlogin = (req,res) => {
    res.redirect(routes.home);
}
export const logout = (req,res) => {
    //To do:logout process
    res.redirect(routes.home);

}
export const users = (req,res) => res.render("users");
export const userDetail = (req,res) => res.render("userDetail");
export const editProfile = (req,res) => res.render("editProfile");
export const changePassword = (req,res) => res.render("changePassword");

