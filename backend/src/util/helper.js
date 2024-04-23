const throwError = (res, e) => {
    console.error(`Error()- ${e.message || e}`);
    res.status(500).json({ error: e, message: e?.message });
};

const OK = (errorCode, res, jsonValue) => {
    res.status(errorCode).json(Object.assign({ success: true }, jsonValue));
};

const cloneDeep = obj => {
    return JSON.parse(JSON.stringify(obj));
};

export { OK, cloneDeep, throwError };
