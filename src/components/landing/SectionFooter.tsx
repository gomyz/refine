import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Link from "next/link";
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';

export const name_site = 'SaaS Kit';
export const title_site = 'Inicie seu projeto rapidamente';

const sectionStyle = {
    width: '100%',
    minHeight: '200px',
    //backgroundImage: `url(${bg_home})`,
    //backgroundColor:'#000a12',
    //backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
    //backgroundPosition: 'center',
    paddingTop:10
};

 const socialMedias = [
    {
        name: 'instagram',
        link: 'https://instagram.com/empreendedorserialbr',
        icon: <Instagram fontSize={'large'} style={{color:"#fff"}} />,
    },
    {
        name: 'facebook',
        link: 'https://facebook.com/empreendedorserialbr',
        icon: <Facebook fontSize={'large'} color={'secondary'}  style={{color:"#fff"}} />,
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/empreendedorserialbr',
        icon: <Twitter fontSize={'large'} color={'secondary'} style={{color:"#fff"}} />,
    },
    {
        name: 'youtube',
        link: 'https://youtube.com/empreendedorserial',
        icon: <YouTube fontSize={'large'} color={'secondary'} style={{color:"#fff"}} />,
    },
];
export default async function SectionFooter() {

    const is_mobil = false

    return (
        <footer style={{backgroundColor:"#14141f"}}>
            <Grid container spacing={1} justifyContent="center">
                <Grid item md={4} sm={12} xs={12} style={{ paddingLeft: 15 }}>
                    <Grid
                        container
                        spacing={4}
                        alignContent="center"
                        justifyContent="center">
                        {socialMedias.map((media, index) => (
                            <Grid item sm={2} key={index}>
                                <Grid container alignContent="center" justifyContent="center">
                                    <a href={media.link} target={'_blank'} rel="noreferrer">
                                        {media.icon}
                                    </a>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Divider />
                <Grid item md={4} sm={12} xs={12}>
                    <Typography variant="subtitle1" align="center">
                        {name_site}
                    </Typography>
                    <a href={'#'}>
                        <Typography variant="body2" align="center" gutterBottom>
                            {title_site}
                        </Typography>
                    </a>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Grid
                        container
                        spacing={0}
                        alignContent="center"
                        justifyContent="center">
                        <Grid item md={4} sm={12} xs={12}>

                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>

                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </footer>
    );
}
