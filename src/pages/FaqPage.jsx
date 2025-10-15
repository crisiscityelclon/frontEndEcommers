import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage = () => {
  return (
    <Container>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">¿Cómo busco un producto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Puedes utilizar la barra de búsqueda ubicada en la parte superior de la página.
           Ingresa palabras clave relacionadas con el producto que estás buscando y presiona Enter.
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">¿Cómo selecciono el producto que quiero comprar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Primero debes buscar el producto que deseas comprar utilizando la barra de búsqueda o navegando por las categorías.
           Una vez que encuentres el producto, haz clic en él para ver más detalles.
            En la página de detalles del producto, selecciona las opciones disponibles (como talla, color, cantidad, etc.) si es necesario.
             Luego, haz clic en el botón "Agregar al carrito" para añadir el producto a tu carrito de compras.
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">¿Donde veo los productos seleccionados?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Puedes ver los productos que has seleccionado haciendo clic en el ícono del carrito de compras, generalmente ubicado en la esquina superior derecha de la página.
           Al hacer clic en el ícono del carrito, se abrirá una vista previa o te llevará a la página del carrito de compras, donde podrás ver todos los productos que has agregado.
            En esta página, podrás revisar los detalles de cada producto, como la cantidad, el precio y el subtotal.
             También tendrás la opción de actualizar las cantidades, eliminar productos o proceder al pago.
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Titulo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Titulo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default FaqPage