/*eslint-disable*/
import React, { forwardRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
const axios = require('axios').default;
//import Form from 'react-bootstrap/Form'



// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// import Edit from "@material-ui/icons/Edit";
// import List from "@material-ui/icons/List";
// import NoteAdd from "@material-ui/icons/NoteAdd";
// import Note from "@material-ui/icons/Note";
// import Check from "@material-ui/icons/Check";
// import Search from "@material-ui/icons/Search";
// import CardIcon from "components/Card/CardIcon";
// import Button from "components/CustomButtons/Button.js";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

//import styles from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";
//import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
//import stylesAlert from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
//import stylesTable from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput"
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody.js";
import List from "@material-ui/icons/List";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import PaginaEdit from "./paginaEdit.js";
import { Button } from "@material-ui/core";

//const useStyles = makeStyles(styles);
//const useStylesAlert = makeStyles(stylesAlert);
//const useStylesTable = makeStyles(stylesTable);

function App() {
  const [paginicial, setPaginicial] = useState(true);
  const [pagEdit, setPagEdit] = useState(false);
  const [pagInclusao, setPagInclusao] = useState(false);
  
  const [descricao, setDescricao] = useState('');
  const [ncm, setNcm] = useState('');
  const [tec, setTec] = useState('');
  const [bkbit, setBkbit] = useState('');
  const [excecoes, setExcecoes] = useState('');
  const [icms_in, setIcms_in] = useState('');
  const [icms_out, setIcms_out] = useState('');
  const [cfop_in, setCfop_in] = useState('');
  const [cfop_out, setCfop_out] = useState('');
  const [st, setSt] = useState('');
  const [nat_receita, setNat_receita] = useState('');
  const [cstpc, setCstpc] = useState();
  const [cstpc_entrada, setCstpc_entrada] = useState();
  const [percpiscred, setPercpiscred] = useState('');
  const [perccofinscred, setPerccofinscred] = useState('');
  const [percpisdeb, setPercpisdeb] = useState('');
  const [perccofinsdeb, setPerccofinsdeb] = useState('');
  const [ativo, setAtivo] = useState('');
  const [val_ibpt, setVal_ibpt] = useState('');
  const [nat_receitasec, setNat_receitasec] = useState('');
  const [cest, setCest] = useState('');
  const [desc_cest, setDesc_cest] = useState('');
  const [produto, setProduto] = useState('');
  const [data, setData] = useState('');
  const [st_out, setSt_out] = useState('');
  const [fundo_cp, setFundo_cp] = useState('');
  const [icms_sub, setIcms_sub] = useState('');
  const [seq, setSeq] = useState('');
  const [dadosNcm, setDadosNcm] = useState([])
  const [condicional, setCondicional] = useState(true);

  /*Salvando valores nas variáveis*/
  const valorDef = function(e){
    if(condicional){
      setNcm(e.ncm);
      setTec(e.tec);
      setBkbit(e.bkbit);
      setExcecoes(e.excecoes);
      setIcms_in(e.icms_in);
      setIcms_out(e.icms_out);
      setCfop_in(e.cfop_in);
      setCfop_out(e.cfop_out);
      setSt(e.st);
      setNat_receita(e.nat_receita);
      setCstpc(e.cstpc);
      setCstpc_entrada(cstpc_entrada);
      setPercpiscred(e.percpiscred);
      setPerccofinscred(e.perccofinscred);
      setPercpisdeb(e.percpisdeb);
      setPerccofinsdeb(e.perccofinsdeb);
      setVal_ibpt(e.val_ibpt);      
      setNat_receitasec(e.nat_receitasec);
      setCest(e.cest);
      setDesc_cest(e.desc_cest);
      setProduto(e.produto);
      setData(e.data);
      setSt_out(e.st_out);
      setFundo_cp(e.fundo_cp);
      setIcms_sub(e.icms_sub);
      setSeq(e.seq);
      setDescricao(e.descricao);
    }else{

    }
  }
  /**/
    const putNcm =  function () {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoic3JpIiwiaWF0IjoxNTgxMDA4NDA3LCJleHAiOjE1ODEwMTE2MDd9.hik1dKanHbSsZEPpnNTKZcMRYTTNwLtdE6xB7P-B5_w'
      const data = {
        ncm,
        tec,
        bkbit,
        descricao,
        excecoes,
        icms_in,
        icms_out,
        cfop_in,
        cfop_out,
        st,
        nat_receita,
        cstpc,
        percpiscred,
        perccofinscred,
        percpisdeb,
        perccofinsdeb,
        val_ibpt,
        nat_receitasec,
        cest,
        desc_cest,
        produto,
        data,
        st_out,
        fundo_cp,
        icms_sub,
        seq,

      }
      axios({
        method: 'put',
        url: `http://192.168.0.96:3001/ncm/${ncm}`,
        headers: {'Content-Type':'application/json','x-access-token': token},
        data
      })
      inicioPag()
    } 

  /*Get Pág inicial*/
  useEffect(() => {
    const getNcm = async function () {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoic3JpIiwiaWF0IjoxNTgxMDA4NDA3LCJleHAiOjE1ODEwMTE2MDd9.hik1dKanHbSsZEPpnNTKZcMRYTTNwLtdE6xB7P-B5_w'
      const ncmDados = await axios({
        method: 'get',
        url: 'http://192.168.0.96:3001/ncm',
        headers: {'Content-Type':'application/json','x-access-token': token}
    })
    const dados = ncmDados.data.dados
    setDadosNcm(dados)
    }
    getNcm();
  }, []);

  /*Chamada para página inicial*/
  const inicioPag = () => {
    setPaginicial(true)
    setPagEdit(false);
  }


  const tableIcons = {
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  };
  if(paginicial){
    return (
      <div id="app">
        <aside>
          <div id="logo">
            <p>Tributo Certo</p>
          </div>
          {/* <div id="img">
            <img
              id="imagem"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNkTr7_cG8xmuNFUqPBBf4AvXT4MLe9-H7yJ9iyA59PtK2BLVX"
              width="50"
              height="60"
            />
          </div> */}
          <div>
            <button type="submit">Cadastrar Novo</button>
          </div>
        </aside>
        <main>
          <div>
            {/* <div className="input-block">
                    <label htmlFor="ncm">NCM</label>
                    <input />
                  </div>
                  <div className="input-block">
                    <label htmlFor="Descrição">Descrição</label>
                    <input />
                  </div>
                  <br /> */}
            <div id="test">
              <MaterialTable
                icons={tableIcons}
                title="Tributação"
                columns={[
                  { title: "NCM", field: "ncm" },
                  { title: "Descrição", field: "descricao" },
                  { title: "Cest", field: "cest" },
                  {title: "St", field:"st"},
                  {title: "Cstpc", field:"cstpc"},
                  {title:"Cfop", field:"cfop_in"},
                  {title:"Ali", field:"icms_in"}
                ]}
                 data={ 
                    dadosNcm.map(e =>{
                      return e
                    })
                  }
                options={{
                  search: true
                }}
                actions={[
                  {
                    icon:Edit ,
                    tooltip: 'Editar',
                    onClick: (event, rowData) => {
                      setPaginicial(false)
                      setPagEdit(true)
                      setCondicional(true)
                      valorDef(rowData)
                    }
                  }
                ]}
              />
            </div>

            {/* <Table
                tableHead={["#", "Descrição", "Cor", "Ações"]}
                tableData={data}
              /> */}
          </div>
        </main>
      </div>
    );
  }
  else if(pagEdit){
    return(
      <>
        <div>
          <button type="submit" onClick={inicioPag}>Voltar</button>
        </div>
        <div id="but1">
          <button type="submit" onClick={putNcm}>Salvar NCM</button>
        </div> 
        <div id="grid">
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color='primary'>
                <List />
              </CardIcon>
            </CardHeader>
            <CardBody>
            <GridContainer>
              <GridItem xs={3}  md={2}>
              <div className="input">
              <CustomInput
                id="ncm"
                labelText="Ncm"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setNcm(e.target.value)
                  },
                  defaultValue: ncm,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="bkbit"
                labelText="Bkbit"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setBkbit(e.target.value)
                  },
                  defaultValue: bkbit,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="excecoes"
                labelText="Exceções"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setExcecoes(e.target.value)
                  },
                  defaultValue: excecoes,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="icms_in"
                labelText="Icms_in"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setIcms_in(e.target.value)
                  },
                  defaultValue: icms_in,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="icms_out"
                labelText="Icms_out"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setIcms_out(e.target.value)
                  },
                  defaultValue: icms_out,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="cfop_in"
                labelText="Cfop_in"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setCfop_in(e.target.value)
                  },
                  defaultValue: cfop_in,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="cfop_out"
                labelText="Cfop_out"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setCfop_out(e.target.value)
                  },
                  defaultValue: cfop_out,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="st"
                labelText="St"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setSt(e.target.value)
                  },
                  defaultValue: st,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="nat_receita"
                labelText="Nat_receita"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setNat_receita(e.target.value)
                  },
                  defaultValue: nat_receita,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="cstpc"
                labelText="Cstpc"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setCstpc(e.target.value)
                  },
                  defaultValue: cstpc,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="cstpc_entrada"
                labelText="Cstpc_entrada"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setCstpc_entrada(e.target.value)
                  },
                  defaultValue: cstpc_entrada,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="percpiscred"
                labelText="Percpiscred"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setPercpiscred(e.target.value)
                  },
                  defaultValue: percpiscred,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="perccofinscred"
                labelText="Perccofinscred"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setPerccofinscred(e.target.value)
                  },
                  defaultValue: perccofinscred,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="percpisdeb"
                labelText="Percpisdeb"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setPercpisdeb(e.target.value)
                  },
                  defaultValue: percpisdeb,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="perccofinsdeb"
                labelText="Perccofinsdeb"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setPerccofinsdeb(e.target.value)
                  },
                  defaultValue: perccofinsdeb,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="val_ibpt"
                labelText="Val_ibpt"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setVal_ibpt(e.target.value)
                  },
                  defaultValue: val_ibpt,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="nat_receitasec"
                labelText="Nat_receitasec"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setNat_receitasec(e.target.value)
                  },
                  defaultValue: nat_receitasec,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="cest"
                labelText="Cest"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setCest(e.target.value)
                  },
                  defaultValue: cest,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="desc_cest"
                labelText="Desc_cest"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setDesc_cest(e.target.value)
                  },
                  defaultValue: desc_cest,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="produto"
                labelText="Produto"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setProduto(e.target.value)
                  },
                  defaultValue: produto,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="data"
                labelText="Data"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setData(e.target.value)
                  },
                  defaultValue: data,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="st_out"
                labelText="St_out"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setSt_out(e.target.value)
                  },
                  defaultValue: st_out,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="fundo_cp"
                labelText="Fundo_cp"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setFundo_cp(e.target.value)
                  },
                  defaultValue: fundo_cp,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="icms_sub"
                labelText="Icms_sub"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setIcms_sub(e.target.value)
                  },
                  defaultValue: icms_sub,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="seq"
                labelText="Seq"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setSeq(e.target.value)
                  },
                  defaultValue: seq,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="tec"
                labelText="Tec"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setTec(e.target.value)
                  },
                  defaultValue: tec,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
              <GridItem  xs={9} md={3}>
              <div className="input">
              <CustomInput
                id="descricao"
                labelText="Descrição"                        
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{                                      
                  onChange: (e) =>{
                    setDescricao(e.target.value)
                  },
                  defaultValue: descricao,
                  //readOnly:(!mdInclusao && !mdEdicao)
                }}
              />
              </div>
              </GridItem>
            </GridContainer>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default App;
