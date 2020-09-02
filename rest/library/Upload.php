<?php 
class Upload{
    protected $Class = "Error" ;
    protected $setclass ;
    protected $Function = "404";
    protected $parameters = [];
    public function __construct()
    {
        $url = $this->getUrl();        
        if(file_exists('./class/' .ucwords($url[0].'.php'))){            
            $this->Class = ucwords($url[0]);            
            unset($url[0]);               
        }
        //Getting new obj class
        $this->setclass = $this->impClass($this->Class);               
        /* Getting function  */
        if(isset($url[1])){
            if(method_exists($this->setclass, $url[1])){
                //chekeamos el metodo
                $this->Function = $url[1];
                //unset indice
                unset($url[1]);                
            }            
        }           
        $this->parameters = $url ? array_values($url) : [];                        
        call_user_func_array([$this->setclass, $this->Function], $this->parameters);
         
    }
        public function impClass($class){
            require_once './class/'.$class.'.php';            
            return new $class;
        }
        /* Getting url */
        public function getUrl(){    
            if(isset($_GET['url'])){
                    $url = rtrim($_GET['url'],'/');
                    $url = filter_var($url, FILTER_SANITIZE_URL);
                    $url = explode('/', $url);
                    return $url;
            }
        }


    }


?>