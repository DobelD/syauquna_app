module.exports = ({ env }) => ({
    url: this.env('https://syauquna.herokuapp.com'),
    proxy: true,
    app: {
        key: env.array('APP_KEYS', ['9BkwzROWRUrwFe/CT7L5QQ==,HjfHnRL4WDtj+IAqjJkvUA==,8PJjuJCUFQ/aj7FCrOzaMQ==,6bZIVbCcfR5GF787XNKKCg=='])
    }

})