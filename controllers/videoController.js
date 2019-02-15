import {videos} from "../db"
import routes from "../routes"

export const home = (req,res) => {
    res.render("home",{videos});
}
export const search = (req,res) => {
    const {query:{term:searchingBy}} = req;
    console.log(searchingBy);
    res.render("search",{pageTitle:"Search",searchingBy,videos});

}
export const getupload = (req,res) => res.render("upload")
export const postupload = (req,res) => {
    const {
        body:{
            file,
            title,
            description
        }
    } = req;
    res.redirect(routes.videoDetail(324393));
}
export const videoDetail = (req,res) => res.render("videoDetail")
export const editVideo = (req,res) => res.render("editVideo")
export const deleteVideo = (req,res) => res.render("deleteVideo")
