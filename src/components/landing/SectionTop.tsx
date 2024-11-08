import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';


const sectionStyle = {
    width: '100%',
    minHeight: '500px',
    //backgroundImage: `url(${bg_home})`,
    backgroundColor:'#14141f',
    //backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
    //backgroundPosition: 'center',
    paddingTop:10
};
export default async function SectionTop() {

    const is_mobil = false

    return (
        <>
                <Grid container sx={sectionStyle} justifyContent="center" alignItems="center">
                    <Grid container alignContent="center" justifyContent="center">
                        <Grid item xs={8} md={8} style={{padding:'2%'}}>
                            <Typography
                                gutterBottom
                                component={'h1'}
                                align={'center'}
                                color="primary"
                                sx={{
                                    fontWeight: '900',
                                    fontSize: is_mobil?'2.4em':'2.7em',
                                    ml: 2,
                                    lineHeight:'1.20',
                                    color:'#fafafa',
                                    textShadow:"1px 1px 1px #fff",
                                }}
                            >
                                SaaS Kit Full Stack
                            </Typography>
                            <Typography
                                gutterBottom
                                component={'h2'}
                                align={'center'}
                                color="primary"
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '1.1em',
                                    ml: 2,
                                    color:'#E5EBF5',
                                    marginBottom:2
                                }}
                            >
                                Solução completa para iniciar seu negócio online
                            </Typography>
                            <Typography
                                gutterBottom
                                component={'h3'}
                                align={'center'}
                                color="primary"
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '1.1em',
                                    ml: 2,
                                    color:'#E5EBF5',
                                    marginBottom:5,
                                }}
                            >
                                SUBABASE - STRIPE - MUI6 - REFINE - NEXTJS 14
                            </Typography>

                        </Grid>

                    </Grid>
                </Grid>
        </>
    );
}
