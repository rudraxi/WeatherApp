
    const getReportStatic = async function (city) {
        const reqUrl = 'http://localhost:8080/weatherreport/all';
        const res = await fetch(reqUrl);
        console.log(res)
        return await res.json();
    }
export { getReportStatic as getReportStatic };


