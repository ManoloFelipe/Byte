import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { MetarialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { UbicacionGarantiaComponent, DialogOverviewExampleDialog } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { HomeComponent } from './components/home/home.component';
import { AgrupacionCreditosComponent } from './components/agrupacion-creditos/agrupacion-creditos.component';
import { AcercamientosComponent, CrearAcercamiento } from './components/acercamientos/acercamientos.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { ArchivosLimpiezaComponent } from './components/archivos-limpieza/archivos-limpieza.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AsesoresPrestamoComponent,CrearAsesoresPrestamos } from './components/asesores-prestamo/asesores-prestamo.component';
import { BancosComponent, CrearBancos } from './components/bancos/bancos.component';
import { CanalesVentaComponent,DialogCanal } from './components/canales-venta/canales-venta.component';
import { CobrosAdicionalesComponent, DialogCobroAdicional} from './components/cobros-adicionales/cobros-adicionales.component';
import { DestinosComponent, DialogDestinos } from './components/destinos/destinos.component';
import { DiasInhabilesComponent, DialogDiaInhabil} from './components/dias-inhabiles/dias-inhabiles.component';
import { EstatusAvaluosComponent, DailogAgregarEstatusAvaluos,DailogEditarEstatusAvaluos, DailogEliminarEstatusAvaluos } from './components/estatus-avaluos/estatus-avaluos.component';
import { EstatusGarantiaRealComponent,DailogAgregarEstatusGarantiaReal, DailogEditarEstatusGarantiaReal, DailogEliminarEstatusGarantiaReal, } from './components/estatus-garantia-real/estatus-garantia-real.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { FormasPagoComponent, DialogFormas } from './components/formas-pago/formas-pago.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { IngenierosValuadoresComponent, DailogAgregarIngenierosValuadores, DailogEditarIngenierosValuadores, DailogEliminarIngenierosValuadores } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { MotivosAjustesComponent, DialogMotivoAjuste } from './components/motivos-ajustes/motivos-ajustes.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MotivosReservasComponent } from './components/motivos-reservas/motivos-reservas.component';
import { NotariosComponent, DialogNotario } from './components/notarios/notarios.component';
import { ParametrizacionNumeroPrestamoComponent } from './components/parametrizacion-numero-prestamo/parametrizacion-numero-prestamo.component';
import { PasosCierreComponent } from './components/pasos-cierre/pasos-cierre.component';
import { RelacionTransaccionDepositosComponent, DialogRelacion } from './components/relacion-transaccion-depositos/relacion-transaccion-depositos.component';
import { TiposCanalesDistribucionComponent, DialogTiposC } from './components/tipos-canales-distribucion/tipos-canales-distribucion.component';
import { TiposDeduccionesComponent, CrearTiposDeducciones } from './components/tipos-deducciones/tipos-deducciones.component';
import { TiposPrestamosComponent } from './components/tipos-prestamos/tipos-prestamos.component';
import { TiposTransaccionesComponent } from './components/tipos-transacciones/tipos-transacciones.component';
import { OrigenFondosComponent, DialogOrigen } from './components/origen-fondos/origen-fondos.component';
import { MediosContactoComponent, DialogContacto } from './components/medios-contacto/medios-contacto.component';
import { MontosPlazoComponent, DailogAgregarMontosPlazo, DailogEditarMontosPlazo,DailogEliminarMontosPlazo } from './components/montos-plazo/montos-plazo.component';
import { DefinirCategoriaUsuarioComponent,DailogAgregarCategoriaUsuario,DailogEliminarCategoriaUsuario,DailogEditarCategoriaUsuario } from './components/definir-categoria-usuario/definir-categoria-usuario.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material';
import { ProductosComponent, CrearProducto } from './components/productos/productos.component';
import { DatosGeneralesComponet, DialogG, DialogE, DialogN, DialogA } from './components/datos-generales/datos-generales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlmacenadoraComponent,
    AseguradorasComponent,
    AgrupacionCreditosComponent,
    LugaresInversionComponent,
    UbicacionGarantiaComponent,

    OrigenFondosComponent,
    FormasPagoComponent,
    DestinosComponent,
    EstatusGarantiaRealComponent,
    EstatusAvaluosComponent,
    IngenierosValuadoresComponent,
    NotariosComponent,
    MotivosAjustesComponent,
    DiasInhabilesComponent,
    CobrosAdicionalesComponent,
    InstitucionesCobrosAdicionalesComponent,
    MotivosReservasComponent,
    FormasDesembolsoComponent,
    MotivosReferenciasClientesComponent,
    RelacionTransaccionDepositosComponent,
    MediosContactoComponent,
    CanalesVentaComponent,
    TiposCanalesDistribucionComponent,
    AcercamientosComponent,
    AsesoresPrestamoComponent,
    BancosComponent,
    TiposDeduccionesComponent,
    TiposPrestamosComponent,
    ArchivosLimpiezaComponent,
    FrecuenciasAmortizacionComponent,
    GarantiasContablesComponent,    
    ParametrizacionNumeroPrestamoComponent,
    PasosCierreComponent,
    TiposTransaccionesComponent,
    MontosPlazoComponent,
    DefinirCategoriaUsuarioComponent,
    DailogAgregarEstatusGarantiaReal,
    DailogEditarEstatusGarantiaReal,
    DailogEliminarEstatusGarantiaReal,
    DailogAgregarEstatusAvaluos,
    DailogEditarEstatusAvaluos,
    DailogEliminarEstatusAvaluos,
    DailogAgregarIngenierosValuadores,
    DailogEditarIngenierosValuadores,
    DailogEliminarIngenierosValuadores,
    DialogOverviewExampleDialog,
    CrearAcercamiento,
    CrearAsesoresPrestamos,
    DialogCanal,
    DialogCobroAdicional,
    DialogDestinos,
    DialogDiaInhabil,
    DialogFormas,
    DialogMotivoAjuste,
    DialogNotario,
    DialogRelacion,
    DialogTiposC,
    CrearTiposDeducciones,
    DialogOrigen,
    DialogContacto,
    DailogAgregarMontosPlazo,//-------
    DailogEditarMontosPlazo,//--------
    DailogEliminarMontosPlazo,//------
    DailogAgregarCategoriaUsuario,
    DailogEliminarCategoriaUsuario,
    DailogEditarCategoriaUsuario,
    AcercamientosComponent,
    AsesoresPrestamoComponent,
    TiposDeduccionesComponent,
    ProductosComponent,
    DatosGeneralesComponet,
    CrearProducto,
    CrearAcercamiento,
    CrearAsesoresPrestamos,
    CrearTiposDeducciones,
    DialogG,
    DialogE,
    DialogN,
    DialogA,
    CrearBancos
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetarialModule,
    AppRoutingModule,
    FormsModule,
    MatRippleModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [    
    DailogAgregarEstatusGarantiaReal,
    DailogEditarEstatusGarantiaReal,
    DailogEliminarEstatusGarantiaReal,
    DailogAgregarEstatusAvaluos,
    DailogEditarEstatusAvaluos,
    DailogEliminarEstatusAvaluos,
    DailogAgregarIngenierosValuadores,
    DailogEditarIngenierosValuadores,
    DailogEliminarIngenierosValuadores,
    DialogOverviewExampleDialog,
    CrearAcercamiento,
    CrearAsesoresPrestamos,
    DialogCanal,
    DialogCobroAdicional,
    DialogDestinos,
    DialogDiaInhabil,
    DialogFormas,
    DialogMotivoAjuste,
    DialogNotario,
    DialogRelacion,
    DialogTiposC,
    CrearTiposDeducciones,
    DialogOrigen,
    DialogContacto,
    DailogAgregarMontosPlazo,//-----------------
    DailogEditarMontosPlazo,//------------------
    DailogEliminarMontosPlazo,//----------------
    DailogAgregarCategoriaUsuario,
    DailogEliminarCategoriaUsuario,
    DailogEditarCategoriaUsuario,
    HomeComponent,
    CrearAcercamiento, 
    CrearAsesoresPrestamos, 
    CrearTiposDeducciones,
    CrearProducto,
    DialogG,
    DialogE,
    DialogN,
    DialogA,
    CrearBancos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
