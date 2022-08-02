const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log('home')
    res.status(200).send("Welcome to pm2")
})

app.post('/get', (req, res, next) => {
    try{
        console.log(`mobile /login ${req.body}`)
        // myLogger.log(`mobile /login ${req.body}`);
        pool.getConnection((err, connection) => {
            if(err) throw err;
            
            const { username, password } = req.body

            connection.query('SELECT * FROM employee WHERE username = ? AND password = ?', [username, password], (err, rows) => {
                connection.release()    //return the connection to the pool

                if(!err){
                    if (rows.length != 0) {
                        const userData = {
                            id: rows[0].id,
                            name: rows[0].employee_name,
                            branch: rows[0].branch_id,
                            last_invoice_id:rows[0].last_invoice_id
                        }
                        res.status(200).send({userData:userData,status:200})
                    }else{
                        console.log('user not found');
                        // myLogger.error("mobile /login user not found");
                        res.status(300).send({status:300})
                    }
                }
                else{
                    res.status(500).send({status:500})
                }
            })
            
        })
    }
    catch (error) {
        // myLogger.error("mobile /login catch error");
        console.log(error)
        res.status(500).send({status:300})
    }
});

const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`Listen on port ${port}`)
})