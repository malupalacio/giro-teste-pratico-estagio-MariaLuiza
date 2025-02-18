import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BreadCrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Início
      </Link>
      <Link underline="hover" color="text.primary" href="/cotacao-das-moedas">
        Cotações de Moedas
      </Link>
    </Breadcrumbs>
  );
}
