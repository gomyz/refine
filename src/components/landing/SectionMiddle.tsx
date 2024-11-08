import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';


const sectionStyle = {
    width: '100%',
    minHeight: '300px',
    //backgroundImage: `url(${bg_home})`,
    //backgroundColor:'#000a12',
    //backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
    //backgroundPosition: 'center',
    paddingTop:10
};
export default async function SectionMiddle() {

    const is_mobil = false

    return (
        <div style={{backgroundColor:"#e5ebf5"}}>
                <Grid container sx={sectionStyle} justifyContent="center" alignItems="center">
                    <Grid container alignContent="center" justifyContent="center">
                        <Grid item xs={8} md={8} style={{padding:'1%'}}>
                            <Typography
                                gutterBottom
                                component={'h3'}
                                align={'justify'}
                                color="primary"
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '1.2em',
                                    ml: 2,
                                    lineHeight:'1.1',
                                    color:'#14141f',
                                    //textShadow:"1px 1px 1px #000",
                                    marginBottom:5
                                }}
                            >
                             kit para desenvolvimento rápido de aplicações SaaS Full Stack com BackEnd, Dashboard e FrontEnd. Uma solução
                             extremamente escalável para milhões de usuários conectados.

                            </Typography>
                            <Typography
                                gutterBottom
                                component={'h4'}
                                align={'justify'}
                                color="primary"
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '1.2em',
                                    ml: 2,
                                    lineHeight:'1.1',
                                    color:'#14141f',
                                    //textShadow:"1px 1px 1px #000",
                                    marginBottom:5
                                }}
                            >
                                Integrado com sistema dw webhooks da Stripe, pagamentos por cartão de crédito, KiwiFy, Hormart e PIX.
                                Utiliza Tecnologia inovadora da Vercel para rápido carregamento de páginas web com SSR, CSR.

                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    );
}
