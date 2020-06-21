
    const getReportStatic = async function (city) {
        const WHOST = process.env.REACT_APP_WHOST
        console.log(WHOST)
        const reqUrl = `${WHOST}/weatherreport/all`;
        console.log(reqUrl)
        const res = await fetch(reqUrl);
        console.log(res)
        return await res.json();
    }
export { getReportStatic as getReportStatic };


