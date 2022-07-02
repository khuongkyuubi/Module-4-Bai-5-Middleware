import onHeader from "on-headers";

export const responseTime = async (req, res, next ) => {
    let start = new Date().getTime();
    onHeader(res, () => {
        let duration = new Date().getTime() - start;
        console.log("Application-level middleware url: " + req.url + "has duration " + duration + "ms");
    })
    next();
};