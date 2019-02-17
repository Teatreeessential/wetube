import routes from "../routes"
import Video from "../models/Video"

export const home = async (req,res) => {
    try{
        const videos = await Video.find({});
        console.log(videos)
        res.render("home",{videos});
    }catch(error){
        console.log(error);
        res.render("home",{videos:[]});
    }
    
}
export const search = (req,res) => {
    const {query:{term:searchingBy}} = req;
    console.log(searchingBy);
    res.render("search",{pageTitle:"Search",searchingBy,videos});

}
export const getupload = (req,res) => res.render("upload")
export const postupload = async (req,res) => {
    const {
      body:{title,description},
      file:{path}
    } = req;
    const newVideo = await Video.create({
        fileUrl:path,
        title,
        description //description:description임
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}
export const videoDetail = (req,res) => res.render("videoDetail")
export const editVideo = (req,res) => res.render("editVideo")
export const deleteVideo = (req,res) => res.render("deleteVideo")
