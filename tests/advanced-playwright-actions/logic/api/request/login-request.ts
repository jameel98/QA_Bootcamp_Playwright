interface loginRequest {
    id_delivery_times: null
    password: string
    recaptcha: string
    restore_account: boolean
    username: string
}


const setLoginData = (): loginRequest => {
    return {
        id_delivery_times: null,
        password: "admin123",
        recaptcha: "03AFcWeA7TQTgH6-OMu0PynwhkatSKTBf5_ifjn67EV46LQ0aBcBBMyBMNH7E9jqEXbtqQGuYZKvcVOxLTFJvxc_r4PQfCsEtdnsVJivRncVyWLJyeGqs_0Y2AhLesLv3Ev3LRQ4FExik_fmm3PMR22e6YZIojI8j9QT7_NzIrYAsO1JPUtOcuZnebbxBj8hVVcwoFeqtYCOp26qvbyfULr_5ws27SKUtjNbGEtOm1_PeGe55VYOMlzU2lco-wXWmhx46xyyrs7ENJXIV_zEEinA0BUJi5h44AEc9wVPsXDg31w5CG4BN8IjRaiUofzQruxtBfmTeCNFuSLMjJZmTMhLUQXKYpf3ZhRH_TfNLQIsNffQIVOULkUILIJ4JQKBOQrHnjjeCf7dzD9AXZrn0E1CtoIuCbFs7Bc5_1NmPHpzCuMDlQ-XYefWX2ux6KYAvALc5MkcRiOYV812Yf8wTJ8rf2feWvnZJtTkpgHYinQ2Q4z-enwDRrsewpcJQvrdaeLCOJ2YyKaK4TRBclp0QBQHSiosLcH3mwyZ-hy_xkANxVwzzz7yRJ5FYj-LSwDRKbQrsWJViAPysKbkGY3fu7lMLqKhNCD8UlrMtCBCRnuG1jb2UyblML3fQL_nfBYelZL37ccnWr4NWBcVdgzLrwaHcmFGOTv-3Mje8ZRSJNnKPzLtLzoIKnkUrY-1lDIg3gDQNFYmJgnw5KdQLIeNNo_P2Q3J6vJeDu--R6YdhA9qzIH0sB5dXe-HR8l3NKPpqmESqS_UJr_roIlTNR-lxYj-hOfdVTEWMbDA6Gph0G7ih16CfJvwMyH41yKwpynN4SkJWYTcwlqjzmY1GIuPkFkwMLdrNKZRYqmv9EyUIxEP-EujRyR_UHlsxmtFl35r59a6NFWa2e_Pj2NpRXiAmfMRFlH4wg4ewrO8q0dT1amEjr5XX57pzGQjpshvQOUqmVzru_KUP_iZXTgfKztc4siXTpgj63ahv07NSN2O6Nx-Z94_oHpVjKSSUUCm3jZcrTVl7g4It7uHj-MSn5xo9ElWoa5zX7I90pZnmk6iyuusZTqkNQqllvMOrD4Irpzwiu3sDsvdLGyTRCn9MjScO24n-Fj_qOHUiCW-0TTIT8i4YaFrGPzJzWCm-KBXUs7nkil3o9rDW_MKV7Y06916T5KNL3RLUidRaD2lk2ZU3LHeR36qCoBe0LUglLoXvNUGD7nEAJBM1nGmRk20drBViQ8LQSMs3rbvvP2bynV05OhlJf729wnp-XEFt7V0hJ4V0tfCxra7Py6lgTvkPbwxD5DbFUvKnhhKZodbNxMJRqvxVyysq4jMr0ZTeAA3msqcv6rd6wOhd1FJGYKy98_T7g8TWPZY-B0unDoYcEMZsKuruXKtQjMnJnpDGeUwAtoOv_O3OERCbRQGiYlZLKtTg8_OtU4p99JlACiyQNjgPd2ihEW84GqfvvUvjU9EVTuMp5d5SRR6i3Q9dUqghgwokOwKkfRl1_rsU5kUYwa9SkO8c8q_DsMn4j8yGyZTzE56fUZTrkWBINSNT1V05HnwpWFLvS6LlFj-KegLVmwhfTiYZV5nxU6P4ntnG4NhhNOO7NncEnE9NowCfOejDknNVsWhSA13nPIs9wPg",
        restore_account: false,
        username: "jameelmograbi@gmail.com",
    }
}
const setClearLoginRequest = (): loginRequest => {
    return {
        id_delivery_times: null,
        password: "",
        recaptcha: "",
        restore_account: false,
        username: "",
    }
}
    export { setLoginData, setClearLoginRequest,loginRequest }