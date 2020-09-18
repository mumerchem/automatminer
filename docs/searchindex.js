Search.setIndex({docnames:["advanced","automatminer","automatminer.automl","automatminer.automl.config","automatminer.automl.tests","automatminer.featurization","automatminer.featurization.tests","automatminer.preprocessing","automatminer.preprocessing.tests","automatminer.tests","automatminer.utils","automatminer.utils.tests","basic","datasets","index","installation","license","modules","tutorials"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["advanced.rst","automatminer.rst","automatminer.automl.rst","automatminer.automl.config.rst","automatminer.automl.tests.rst","automatminer.featurization.rst","automatminer.featurization.tests.rst","automatminer.preprocessing.rst","automatminer.preprocessing.tests.rst","automatminer.tests.rst","automatminer.utils.rst","automatminer.utils.tests.rst","basic.rst","datasets.rst","index.rst","installation.rst","license.rst","modules.rst","tutorials.rst"],objects:{"":{automatminer:[1,0,0,"-"]},"automatminer.automl":{adaptors:[2,0,0,"-"],base:[2,0,0,"-"],config:[3,0,0,"-"],tests:[4,0,0,"-"]},"automatminer.automl.adaptors":{SinglePipelineAdaptor:[2,1,1,""],TPOTAdaptor:[2,1,1,""]},"automatminer.automl.adaptors.SinglePipelineAdaptor":{backend:[2,2,1,""],best_pipeline:[2,2,1,""],features:[2,2,1,""],fit:[2,2,1,""],fitted_target:[2,2,1,""],mode:[2,3,1,""]},"automatminer.automl.adaptors.TPOTAdaptor":{backend:[2,3,1,""],best_models:[2,3,1,""],best_pipeline:[2,2,1,""],deserialize:[2,2,1,""],features:[2,2,1,""],fit:[2,2,1,""],fitted_target:[2,2,1,""],from_serialized:[2,3,1,""],mode:[2,3,1,""],models:[2,3,1,""],serialize:[2,2,1,""]},"automatminer.automl.base":{DFMLAdaptor:[2,1,1,""]},"automatminer.automl.base.DFMLAdaptor":{backend:[2,2,1,""],best_pipeline:[2,2,1,""],deserialize:[2,2,1,""],features:[2,2,1,""],fitted_target:[2,2,1,""],predict:[2,2,1,""],serialize:[2,2,1,""],transform:[2,2,1,""]},"automatminer.automl.config":{tpot_configs:[3,0,0,"-"]},"automatminer.automl.tests":{test_adaptors:[4,0,0,"-"],test_base:[4,0,0,"-"]},"automatminer.automl.tests.test_adaptors":{TestSinglePipelineAdaptor:[4,1,1,""],TestTPOTAdaptor:[4,1,1,""]},"automatminer.automl.tests.test_adaptors.TestSinglePipelineAdaptor":{setUp:[4,2,1,""],test_BaseEstimator:[4,2,1,""],test_BaseEstimator_classification:[4,2,1,""],test_Pipeline:[4,2,1,""],test_feature_mismatching:[4,2,1,""]},"automatminer.automl.tests.test_adaptors.TestTPOTAdaptor":{setUp:[4,2,1,""],test_classification:[4,2,1,""],test_feature_mismatching:[4,2,1,""],test_regression:[4,2,1,""],test_training_only:[4,2,1,""]},"automatminer.automl.tests.test_base":{TestAdaptorBad:[4,1,1,""],TestAdaptorGood:[4,1,1,""],TestBaseAutoMLTransformers:[4,1,1,""]},"automatminer.automl.tests.test_base.TestAdaptorGood":{backend:[4,2,1,""],best_pipeline:[4,2,1,""],features:[4,2,1,""],fit:[4,2,1,""],fitted_target:[4,2,1,""],predict:[4,2,1,""]},"automatminer.automl.tests.test_base.TestBaseAutoMLTransformers":{setUp:[4,2,1,""],test_DFMLAdaptor:[4,2,1,""]},"automatminer.base":{DFTransformer:[1,1,1,""]},"automatminer.base.DFTransformer":{fit:[1,2,1,""],fit_transform:[1,2,1,""],transform:[1,2,1,""]},"automatminer.featurization":{base:[5,0,0,"-"],core:[5,0,0,"-"],sets:[5,0,0,"-"],tests:[6,0,0,"-"]},"automatminer.featurization.base":{FeaturizerSet:[5,1,1,""]},"automatminer.featurization.base.FeaturizerSet":{all:[5,2,1,""],debug:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""]},"automatminer.featurization.core":{AutoFeaturizer:[5,1,1,""]},"automatminer.featurization.core.AutoFeaturizer":{auto_featurizer:[5,3,1,""],converted_input_df:[5,3,1,""],features:[5,3,1,""],featurizers:[5,3,1,""],fit:[5,2,1,""],fitted_input_df:[5,3,1,""],min_precheck_frac:[5,3,1,""],removed_featurizers:[5,3,1,""],transform:[5,2,1,""]},"automatminer.featurization.sets":{AllFeaturizers:[5,1,1,""],BSFeaturizers:[5,1,1,""],CompositionFeaturizers:[5,1,1,""],DOSFeaturizers:[5,1,1,""],StructureFeaturizers:[5,1,1,""]},"automatminer.featurization.sets.AllFeaturizers":{all:[5,2,1,""],bandstructure:[5,2,1,""],composition:[5,2,1,""],debug:[5,2,1,""],dos:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""],structure:[5,2,1,""]},"automatminer.featurization.sets.BSFeaturizers":{all:[5,2,1,""],debug:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""]},"automatminer.featurization.sets.CompositionFeaturizers":{all:[5,2,1,""],debug:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""]},"automatminer.featurization.sets.DOSFeaturizers":{all:[5,2,1,""],debug:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""]},"automatminer.featurization.sets.StructureFeaturizers":{all:[5,2,1,""],debug:[5,2,1,""],express:[5,2,1,""],heavy:[5,2,1,""],need_fit:[5,2,1,""]},"automatminer.featurization.tests":{test_base:[6,0,0,"-"],test_core:[6,0,0,"-"],test_sets:[6,0,0,"-"]},"automatminer.featurization.tests.test_base":{TestAutoFeaturizer:[6,1,1,""]},"automatminer.featurization.tests.test_base.TestAutoFeaturizer":{test_fsets:[6,2,1,""]},"automatminer.featurization.tests.test_core":{TestAutoFeaturizer:[6,1,1,""]},"automatminer.featurization.tests.test_core.TestAutoFeaturizer":{setUp:[6,2,1,""],tearDown:[6,2,1,""],test_StructureFeaturizers_needs_fitting:[6,2,1,""],test_caching:[6,2,1,""],test_column_attr:[6,2,1,""],test_exclude_by_users:[6,2,1,""],test_featurize_bsdos:[6,2,1,""],test_featurize_composition:[6,2,1,""],test_featurize_structure:[6,2,1,""],test_featurizers_by_users:[6,2,1,""],test_functionalization:[6,2,1,""],test_prechecking:[6,2,1,""],test_presets:[6,2,1,""],test_sanity:[6,2,1,""],test_transferability:[6,2,1,""]},"automatminer.featurization.tests.test_sets":{TestAllFeaturizers:[6,1,1,""],TestFeaturizerSets:[6,1,1,""]},"automatminer.featurization.tests.test_sets.TestAllFeaturizers":{get_featurizers:[6,2,1,""],setUp:[6,2,1,""],test_bandstructure_featurizers:[6,2,1,""],test_composition_featurizers:[6,2,1,""],test_dos_featurizers:[6,2,1,""],test_structure_featurizers:[6,2,1,""]},"automatminer.featurization.tests.test_sets.TestFeaturizerSets":{setUp:[6,2,1,""],test_sets_not_empty:[6,2,1,""]},"automatminer.pipeline":{MatPipe:[1,1,1,""]},"automatminer.pipeline.MatPipe":{benchmark:[1,2,1,""],fit:[1,2,1,""],from_preset:[1,2,1,""],inspect:[1,2,1,""],load:[1,2,1,""],ml_type:[1,3,1,""],post_fit_df:[1,3,1,""],pre_fit_df:[1,3,1,""],predict:[1,2,1,""],save:[1,2,1,""],summarize:[1,2,1,""],target:[1,3,1,""],transform:[1,2,1,""],version:[1,3,1,""]},"automatminer.preprocessing":{core:[7,0,0,"-"],feature_selection:[7,0,0,"-"],tests:[8,0,0,"-"]},"automatminer.preprocessing.core":{DataCleaner:[7,1,1,""],FeatureReducer:[7,1,1,""]},"automatminer.preprocessing.core.DataCleaner":{dropped_features:[7,3,1,""],dropped_samples:[7,3,1,""],fit:[7,2,1,""],fit_transform:[7,2,1,""],fitted_df:[7,3,1,""],fitted_target:[7,3,1,""],handle_na:[7,2,1,""],max_problem_col_warning_threshold:[7,3,1,""],number_cols:[7,3,1,""],object_cols:[7,3,1,""],retained_features:[7,2,1,""],to_numerical:[7,2,1,""],transform:[7,2,1,""],warnings:[7,3,1,""]},"automatminer.preprocessing.core.FeatureReducer":{fit:[7,2,1,""],reducer_params:[7,3,1,""],removed_features:[7,3,1,""],retained_features:[7,3,1,""],rm_correlated:[7,2,1,""],transform:[7,2,1,""]},"automatminer.preprocessing.feature_selection":{TreeFeatureReducer:[7,1,1,""],lower_corr_clf:[7,4,1,""],rebate:[7,4,1,""]},"automatminer.preprocessing.feature_selection.TreeFeatureReducer":{fit:[7,2,1,""],get_reduced_features:[7,2,1,""],get_top_features:[7,2,1,""],transform:[7,2,1,""]},"automatminer.preprocessing.tests":{test_core:[8,0,0,"-"]},"automatminer.preprocessing.tests.test_core":{TestFeatureReduction:[8,1,1,""],TestPreprocess:[8,1,1,""]},"automatminer.preprocessing.tests.test_core.TestFeatureReduction":{setUp:[8,2,1,""],test_TreeBasedFeatureReduction:[8,2,1,""],test_lower_corr_clf:[8,2,1,""],test_rebate:[8,2,1,""]},"automatminer.preprocessing.tests.test_core.TestPreprocess":{setUp:[8,2,1,""],test_DataCleaner:[8,2,1,""],test_DataCleaner_big_nan_handler_warning:[8,2,1,""],test_DataCleaner_emergency_na_transform_imputation:[8,2,1,""],test_DataCleaner_feature_na_method:[8,2,1,""],test_DataCleaner_na_method_feature_sample_interaction:[8,2,1,""],test_DataCleaner_sample_na_method:[8,2,1,""],test_FeatureReducer_advanced:[8,2,1,""],test_FeatureReducer_basic:[8,2,1,""],test_FeatureReducer_classification:[8,2,1,""],test_FeatureReducer_combinations:[8,2,1,""],test_FeatureReducer_pca:[8,2,1,""],test_FeatureReducer_transferability:[8,2,1,""],test_df:[8,2,1,""],test_manual_feature_reduction:[8,2,1,""],test_saving_feature_from_removal:[8,2,1,""]},"automatminer.presets":{get_available_presets:[1,4,1,""],get_preset_config:[1,4,1,""]},"automatminer.tests":{test_base:[9,0,0,"-"],test_pipeline:[9,0,0,"-"],test_presets:[9,0,0,"-"]},"automatminer.tests.test_base":{TestBaseTransformers:[9,1,1,""],TestTransformerBad:[9,1,1,""],TestTransformerGood:[9,1,1,""]},"automatminer.tests.test_base.TestBaseTransformers":{setUp:[9,2,1,""],test_DFTransformer:[9,2,1,""],test_DFTransformer_BaseEstimator_behavior:[9,2,1,""]},"automatminer.tests.test_base.TestTransformerGood":{fit:[9,2,1,""],transform:[9,2,1,""]},"automatminer.tests.test_pipeline":{MatPipeDebugSingleTest:[9,1,1,""],MatPipeDebugTest:[9,1,1,""],TestMatPipeSetup:[9,1,1,""],make_matpipe_test:[9,4,1,""]},"automatminer.tests.test_pipeline.TestMatPipeSetup":{setUp:[9,2,1,""],test_from_preset:[9,2,1,""],test_instantiation:[9,2,1,""]},"automatminer.tests.test_presets":{TestMatPipePresets:[9,1,1,""]},"automatminer.tests.test_presets.TestMatPipePresets":{test_caching_powerup:[9,2,1,""],test_debug:[9,2,1,""],test_debug_single:[9,2,1,""],test_express:[9,2,1,""],test_express_single:[9,2,1,""],test_heavy:[9,2,1,""],test_missing:[9,2,1,""],test_n_jobs_powerup:[9,2,1,""],test_production:[9,2,1,""]},"automatminer.utils":{log:[10,0,0,"-"],ml:[10,0,0,"-"],pkg:[10,0,0,"-"],tests:[11,0,0,"-"]},"automatminer.utils.log":{initialize_logger:[10,4,1,""],initialize_null_logger:[10,4,1,""],log_progress:[10,4,1,""]},"automatminer.utils.ml":{is_greater_better:[10,4,1,""],regression_or_classification:[10,4,1,""]},"automatminer.utils.pkg":{AutomatminerError:[10,5,1,""],VersionError:[10,5,1,""],check_fitted:[10,4,1,""],compare_columns:[10,4,1,""],get_version:[10,4,1,""],return_attrs_recursively:[10,4,1,""],save_dict_to_file:[10,4,1,""],set_fitted:[10,4,1,""]},"automatminer.utils.tests":{test_log:[11,0,0,"-"],test_ml:[11,0,0,"-"],test_pkg:[11,0,0,"-"]},"automatminer.utils.tests.test_log":{TestLogTools:[11,1,1,""]},"automatminer.utils.tests.test_log.TestLogTools":{tearDown:[11,2,1,""],test_logger_initialization:[11,2,1,""]},"automatminer.utils.tests.test_ml":{TestMLTools:[11,1,1,""]},"automatminer.utils.tests.test_ml.TestMLTools":{test_is_greater_better:[11,2,1,""],test_regression_or_classification:[11,2,1,""]},"automatminer.utils.tests.test_pkg":{MyTransformer:[11,1,1,""],TestPackageTools:[11,1,1,""]},"automatminer.utils.tests.test_pkg.MyTransformer":{fit:[11,2,1,""],transform:[11,2,1,""]},"automatminer.utils.tests.test_pkg.TestPackageTools":{setUp:[11,2,1,""],tearDown:[11,2,1,""],test_compare_columns:[11,2,1,""],test_fitting_decorations:[11,2,1,""],test_get_version:[11,2,1,""],test_save_dict_to_file:[11,2,1,""]},automatminer:{automl:[2,0,0,"-"],base:[1,0,0,"-"],featurization:[5,0,0,"-"],pipeline:[1,0,0,"-"],preprocessing:[7,0,0,"-"],presets:[1,0,0,"-"],tests:[9,0,0,"-"],utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"100k":14,"abstract":[1,2,5],"case":[0,4,6,8,9,11],"catch":6,"class":[0,1,2,3,4,5,6,7,8,9,11,12],"default":[0,3,5,7,10,12],"final":[6,7],"float":[5,7],"function":[0,1,5,7,10,12,13,16],"import":[0,1,7,10,12,13,14],"int":[1,5,6,7,10],"long":12,"new":[1,5,6,7,12],"null":7,"public":[13,14],"return":[0,1,2,4,5,6,7,8,9,10,11,12],"static":[1,6,12,13],"throw":[1,8],"true":[0,1,2,4,5,6,7,12],"try":[5,12,15],"while":[6,7,13],AND:16,ARE:16,Adding:12,And:14,BUT:16,DOS:[1,5,12],FOR:16,For:[0,2,3,5,8,10,12,13,14],NOT:[7,16],Not:5,SUCH:16,THE:16,Thats:0,The:[0,1,2,4,5,7,10,12,13,14,16],There:[13,18],These:[0,5],USE:16,Use:[0,5,12,13],Used:1,Useful:9,Uses:2,Using:14,__init__:[0,10],_feature_import:7,abc:[1,5,6],abl:[2,6,12,15],about:[10,13],abov:[12,13,16],abs:14,absolut:5,accept:[2,7,12,13],access:[0,1,14],accident:8,accord:7,accumul:7,accur:14,accuraci:[1,12,14],across:14,actual:[1,5,7],adapt:2,adaptor:[0,1,4,17],add:[0,2,3],added:14,addit:[5,7,12],advanc:[12,13,14],advantag:0,advis:16,after:[5,6,7,10,11,12,13],agreement:16,algorithm:[0,2,3,4,7,14],all:[0,1,2,5,6,7,8,9,10,12,13,14,16,18],allfeatur:[5,6],allow:[1,5,7],alon:13,alreadi:[0,7],also:[0,13],altern:7,although:0,amm_clf_nam:2,amm_reg_nam:2,analag:[0,2],analog:12,analyi:10,analysi:7,ani:[0,2,4,5,7,8,14,16,18],anoth:[0,1,6],anyon:16,anywher:7,appear:13,appli:[1,5,6,7,10],applic:[5,13],approv:16,arang:2,area:14,arg:[5,6,9],argument:[0,1,5,7,12,13],aris:16,arxiv:14,assign:[0,12],associ:0,assort:11,assum:0,atom:13,attr:[7,9,10],attrdict:10,attribut:[1,2,5,6,7,10,12],auc:13,auto:[1,7,10],auto_featur:5,autofeatur:[0,1,5,6,10,12],autofeaturix:1,autogener:14,automat:[0,1,5,6,7,12,14],automatmin:[0,12,13,15,16,18],automatminererror:10,automl:[0,1,14,17],avail:[1,2,5,6,16],backend:[0,2,4,14],bagofbond:5,balanc:1,band:[5,14],bandgap:14,bandstruct_col:6,bandstructur:[0,1,5,12,14],bandstructure_col:5,base:[4,6,7,8,9,10,11,12,13,17],baseestim:[0,1,2,4],baseexcept:10,basefeatur:5,basic:[8,14],been:[0,1,10,14],befor:[4,5,6,7,8,9,10,11],begin:10,behavior:[0,6],being:[0,2,4,5,10,13],below:[10,13,16],benchmark:[1,12,14],berkelei:16,best:[1,2,4,13],best_featur:5,best_model:2,best_pipelin:[2,4],better:[5,10],between:[1,7],bewar:14,bfill:7,bias:0,bibtex:13,binari:16,bolt:12,bool:[1,2,5,6,7,10],bootstrap:2,both:[0,12,14],brave:14,brief:13,bs_featur:5,bsd:16,bsfeatur:5,bug:16,buggier:1,busi:16,cach:1,cache_src:[0,1,5],calcul:[7,13],california:16,call:[0,2,4,5,7,12],can:[0,1,2,3,4,5,8,9,10,12,13,14,15,18],cannot:[5,13],care:3,castabl:10,categor:[7,10],categori:7,caus:16,cell:[7,13],central:13,certain:[5,9,14],chang:[0,1,14],changelog:14,check:[3,6,9,10,13],check_fit:[1,2,10],check_valid:5,chemic:13,choic:[0,5],choos:[0,7,16],circular:10,citat:13,cite:13,citrin:13,classif:[0,1,2,7,10,13],classifi:[0,2],clean:[0,1,7,12,13],cleaner:[0,1],clone:15,close:[2,4,12],code:[12,13,14,16,18],coeffici:7,coerce_mismatch:7,column:[0,1,5,7,10,12,13],com:[2,13,15],combin:[1,7],come:12,command:10,comment:3,common:0,compar:[0,10,13,14],compare_column:10,comparison:13,compat:[2,4],complet:[5,14],compon:[1,7],composit:[0,1,5,6,12,13,14],composition_col:[5,6],composition_featur:5,compositionfeatur:5,comprehens:12,comput:[1,14,16],computation:0,conda:15,condit:16,config:[0,1,2,12],config_attr:[4,9],config_dict:[2,3],config_preset:9,configur:[0,1,9,12],consequenti:16,consid:[3,6,10,13,14],consist:7,constitu:[1,9,12],construct:12,contain:[0,1,3,5,7,10,12,13,14],content:17,contract:16,contrast:12,contributor:[14,16],convers:12,convert:5,converted_input_df:5,copyright:16,core:[1,17],corr:[0,7],corr_threshold:7,correct:[5,12],correctli:[4,6,8,9],correl:[7,12],correspond:5,could:5,cpu:12,craft:7,creat:[0,1,7,9,14],creation:1,critic:12,cross:[0,7,12,13],crossvalid:7,crystal:[12,13],crystallin:14,curat:0,current:[1,2,3,7,8,9,12],custom:[3,6,10,12,14],damag:16,data:[0,1,2,5,7,12,13,14,16],dataclean:[0,1,7,8,12],datafram:[0,1,2,5,7,8,10,12,13,14],dataframetransform:[1,10],dataset:[0,1,5,6,12,14],deal:7,deatafram:8,debug:[1,5,9,10,12],debug_singl:1,decid:[7,10],deconstruct:[6,11],decor:[1,5,10,14],dedupl:13,deepcopi:8,defin:[0,1,5,6,7],degre:12,densiti:[5,14],depend:0,deploy:13,dept:16,deriv:16,descend:7,descript:13,descriptor:[1,12,14],deseri:[1,2],design:14,desir:[1,7],detail:[12,13],determin:[5,7,10,12],determinist:7,develop:[6,16,18],df1:10,df1_not_in_df2:10,df2:10,df2_not_in_df1:10,dfmladaptor:[0,1,2,4],dfpt:13,dftransform:[1,2,5,7,9,11,14],dict:[1,3,5,7,10,12],dictat:8,dictionari:[5,10],differ:14,difficult:[1,14],digest:12,direct:16,directli:[2,7,16],directori:12,disclaim:16,discrtet:5,discuss:13,disk:14,distribut:16,divers:0,do_precheck:5,document:[3,5,16],doe:[2,4,5,7],doing:0,domain:13,don:[0,14],done:13,dopp:14,dos:[0,5,12],dos_col:[5,6],dos_featur:5,dosfeatur:5,down:14,download:13,drop:[0,5,7,12],drop_input:5,drop_na_target:7,dropped_featur:7,dropped_sampl:7,due:[2,12],dummi:10,dunn:14,duplic:12,dure:[0,1,2,5,7],e_form:13,each:[0,1,5,7,12,13],easi:[1,14],easiest:[0,12],eigendecomposit:7,either:[2,16],electron:14,electronic_structur:12,elementproperti:5,emerg:8,enabl:1,encod:[0,7],encode_categori:7,end:12,endors:16,energi:16,enhanc:16,ensembl:2,ensur:[0,6,8,9,10],entir:[0,1,5],entri:[6,13],environ:15,epistasislab:2,equival:[0,12],error:[0,1,5,7,8,10,12],establish:1,estim:0,etc:[0,5,7,12,13],evalu:[0,13],even:[1,16],event:[6,16],everyon:14,everyth:12,ewaldenergi:[0,5],exact:13,exactli:[6,12],examin:[2,4,14],exampl:[0,1,2,5,7,10,12,13,14,18],except:10,exclud:[0,5],exclus:[13,16],execut:[5,10,12],exemplari:16,exercis:[4,6,8,9,11],exfoliation_en:13,exist:5,expens:[0,5],experi:1,experiment:[13,14],explor:2,express:[0,1,5,12,16],express_singl:1,expt:13,extend:14,extens:[2,10],fail:0,fair:13,fals:[1,2,5,6,7],far:0,fashion:[0,2,12],fast:5,faster:6,favor:10,feat_import:7,featur:[0,1,2,4,7,8,10,12,14,16,17],feature_importances_:7,feature_na_method:7,feature_select:[1,17],featurereduc:[0,1,7,12],featuris:5,featurize_bandstructur:6,featurize_do:6,featurizerset:[5,6],fed:7,feedback:14,few:[0,2],fewer:7,ffill:7,figshar:13,file:[1,3,5,6,10,12,13,14],filenam:[1,10,12],fill:7,fillna:7,find:[0,13,14],finish:[10,12],first:[5,7,10,13,15],fit:[0,1,2,4,5,6,7,8,9,10,11,12,14,16],fit_and_transform:6,fit_kwarg:[1,7],fit_transform:[0,1,7],fitted_df:[7,8],fitted_input_df:5,fitted_pipeline_:[2,4],fitted_target:[2,4,7],fix:16,fixtur:[4,6,8,9,11],flexibl:0,focus:5,fold:[0,13],folder:[10,13],follow:[1,2,7,13,16],forest:[2,7],fork:14,form:[1,2,4,12,16],format:[1,5,10,13],formatt:10,formula:[6,13],forum:[13,14,15,18],forward:14,found:[2,4,5,18],four:[0,5],fraction:[5,7,8],framework:13,free:16,friendli:7,from:[0,1,2,3,5,7,8,12,13,14,16],from_preset:[0,1,5,12],from_seri:2,full:[2,9,13,14],fulli:0,func:10,futur:3,g_vrh:13,ganos:14,gap:[13,14],gener:[0,1,5,12,13],genet:3,get:[0,1,6,10,12,14],get_all_dataset_info:13,get_available_preset:1,get_featur:6,get_preeset_config:1,get_preset_config:[0,1],get_reduced_featur:7,get_top_featur:7,get_vers:10,gfa:13,git:15,github:[2,14,15,18],give:[7,12],given:[1,5,7,13],globalsymmetryfeatur:5,gone:8,good:[1,16],got:14,gpa:13,grant:16,greater:[7,10],grow:14,guess_oxist:5,guidelin:14,hackingmateri:15,half:7,hand:14,handl:[0,7,8,12],handle_na:7,handler:10,happen:12,has:[0,1,7,8,10,12,14],have:[0,1,5,7,12,14,18],heavi:[1,5,12],heirarchi:12,held:1,help:[10,14,15],here:[0,12,13,14],herebi:16,high:[1,7,8],higher:[2,4,7],highest:1,highli:[5,7],hold:[0,5],holder:16,hook:[4,6,8,9,11],horribl:8,host:18,hot:7,hour:0,hous:7,how:[0,1,7,12],howev:[5,16],http:[2,13,14,15],human:[1,12],hundr:14,hyperparamet:0,idea:0,ident:0,identifi:[0,7],ignor:[0,5,6,7,10],ignore_col:5,ignore_error:5,imagenet:13,implement:[0,1,2,4,5,7,8,9],implementor:5,impli:16,importance_percentil:7,impos:16,improv:14,imput:[0,8,12],incident:16,includ:[0,1,5,8,12,13,14,16],incompat:5,incomplet:0,incorpor:16,incorrectli:[4,9],independ:6,index:[13,14],indexwis:5,indirect:16,individu:[7,14],infer:[6,12],info:[5,10,12,14],inform:[1,3,5,10,12],informat:13,inherit:1,initi:[0,9,10,14],initialize_logg:10,initialize_null_logg:10,inner:0,inorgan:13,input:[0,5,7,10,12],insid:[6,15],inspect:[1,5,12,14],instal:[14,16],instanc:[2,3,10],instanti:7,instead:[1,2,3,4,5],instruct:13,integ:10,intellig:13,intend:[0,5,12],intens:12,interact:13,interest:12,interfac:[0,2,9],intermedi:12,intern:12,interpret:12,interrupt:16,introduct:0,involv:14,irrelev:5,is_greater_bett:10,is_met:13,issu:7,item:5,iter:7,its:[12,13,14,16],jain:14,job:[0,5],joint:12,json:[0,5,10,12,13],jupyt:[12,18],just:[5,7,12],k_vrh:13,keep:0,keep_featur:7,kei:[5,7],keyword:[1,2],kfold:[0,13],kind:14,know:14,known:[1,14],kwarg:[1,2,4,5,7,9,11],label:[2,4,7,10],laboratori:16,larger:[7,10,13],last:13,later:[5,14],latest:15,lawrenc:16,leaderboard:14,learn:[0,1,2,4,5,7,10,11,12,13,14],learner:[0,1],least:5,let:[0,14],level:[0,1,2,4,7,9,10,12],liabil:16,liabl:16,librari:[3,10,14],licens:14,like:[0,1,2,12,14],limit:[2,6,16],line:14,linear:7,link:13,linux:15,list:[0,1,5,6,7,9,13,14,16],load:[0,1,2,12,14],load_dataset:13,loc:5,local:13,locat:1,log10:13,log:[1,2,5,7,11,13,14,17],log_dir:10,log_progress:10,logger:[9,10],logger_nam:10,longer:12,look:[0,12,14],loss:16,lower:7,lower_corr_clf:7,machin:[0,1,2,4,7,10,11,12,14],maco:15,made:[0,1,13],mae:13,mai:[0,1,3,5,6,7,8,13,15,16],mainli:9,make:[0,1,2,5,6,8,13,14,16],make_matpipe_test:9,manag:13,mani:[5,14],manual:5,matbench:[0,2],matbench_dielectr:13,matbench_expt_gap:13,matbench_expt_is_met:13,matbench_glass:13,matbench_jdft2d:13,matbench_log_gvrh:13,matbench_log_kvrh:13,matbench_mp_e_form:13,matbench_mp_gap:13,matbench_mp_is_met:13,matbench_perovskit:13,matbench_phonon:13,matbench_steel:13,match:[6,7],materi:[0,1,12,13,14,16],materialsproject:13,matmin:[0,5,6,13,14,18],matminer_exampl:12,matpip:[0,1,2,4,5,9,12,14],matpipedebugsingletest:9,matpipedebugtest:9,matric:5,matrix:7,max:[7,12],max_featur:2,max_na_frac:[0,7],max_problem_col_warning_threshold:7,max_time_min:0,maximum:[6,7],mean:[7,8,13],meant:6,measur:13,mechan:[13,14],median:7,memori:8,merchant:16,met:16,method:[0,1,2,4,5,6,7,8,9,10,11,12,13,14],methodnam:[4,6,8,9,11],metric:10,mev:13,might:[12,18],min_precheck_frac:5,min_samples_leaf:2,min_samples_split:2,minim:5,minimum:5,minut:13,misc:13,misconfigur:12,mismatch:[1,7,10],mistak:6,mitig:0,mixin:1,ml_type:1,mode:[2,7],model:[0,1,2,4,7,12,13,14],model_evalu:0,moder:[1,12,14],modif:[1,16],modifi:[0,3,16],modiic:13,modul:[14,17],monitor:14,more:[0,1,2,4,5,7,10,12,13,14],most:[1,7,14],mpa:13,mpcontrib:13,mprester:6,msg:10,much:[0,15],multiiindex:5,multiindex:5,multipl:[0,5],multiprocess:0,multisurf:7,must:[2,4,7,8,13,16],my_detail:12,my_df:0,my_input_df:0,my_pipelin:12,my_properti:[0,12],my_summari:12,my_target_properti:0,mydict:10,mytransform:11,n_core:5,n_estim:[0,2],n_featur:7,n_job:[0,1,5],n_pca_featur:7,n_rebate_featur:7,n_split:0,na_method:7,na_method_fit:7,na_method_transform:7,name:[0,1,2,5,6,7,9,10,12,13,16],nan:[0,5,7,8],nation:16,nativ:10,ncv:13,ndarrai:7,necessari:[1,2,7],necessarili:5,need:[0,2,4,6,7,12,15],need_fit:5,neglig:16,neither:16,nest:[0,13],nhowpublish:13,non:[5,7,16],none:[1,2,4,5,6,7,8,9,10,11],nor:16,normal:5,notat:7,note:[0,1,2,7,12,13],notebook:[12,18],noth:7,notic:16,now:[0,5,12,14],ntitl:13,num:13,number:[0,1,5,6,7,8,12,13],number_col:7,numer:[7,8,10],numpi:[7,10],obejct:5,obj:10,object:[0,1,2,4,5,6,7,10,12,13,14],object_col:7,oblig:16,occurr:7,offici:15,often:0,onc:[0,7,12,13,14],one:[0,1,6,7,12],onehot:7,onli:[0,1,2,5,6,9,10,12,13,14],onlin:18,open:16,oper:[0,2,3,5,7,10,12],optim:3,option:[0,5,6,7,12],order:[7,13],ordereddict:2,org:[13,14],origin:13,other:[0,1,5,7,12,14,16],otherwis:[6,7,16],our:[0,12,13,14,18],out:[0,1,3,12,13,14,16],outer:0,output:[0,2,5,7,10,12],outsid:[0,10,13],overridden:[2,4],overview:[0,12],overwrit:8,own:[0,1,13],owner:16,oxid:5,packag:17,pad:7,page:[12,13,14],panda:[1,2,7,8,10,12,14],paper:13,parallel:[0,1,5],param:10,paramet:[0,1,2,5,6,7,9,10,12],paramt:[1,2],part:[0,9],particular:[9,16],particularli:1,pass:[0,5,7,9],patch:16,path:[1,5,10],pbe:13,pca:7,peak:13,per:[5,13],percentil:7,perform:[0,7,16],permiss:16,permit:16,perpetu:16,persist:10,phase:14,phdo:13,pick:14,pickl:[1,2,12],pip:14,pipe:[0,1,12,14],pipelin:[2,4,14,17],pkg:[1,17],place:18,placehold:7,pleas:[10,13,14],plu:12,plumb:12,point:14,portabl:14,possibl:[2,4,15,16],post:[13,14],post_fit_df:1,power:[1,12],powerup:1,practic:14,pre_fit_df:1,precheck:[0,5],predict:[0,1,2,4,13,14],predicted_df:[0,14],predicted_fold:0,prediction_df:12,prefer:[2,4],prepar:[0,16],preprint:14,preprocess:[1,3,17],preprocessor:3,present:[2,4,5,7],preset:[0,5,9,14,17],pretti:10,prevent:[0,8],previou:2,primit:[12,13],princip:7,print:[10,13],prior:16,problem:[0,1,2,8,10,12,13,18],problemat:[0,7,12],procedur:[0,3,13],process:[1,13,14],procur:16,product:[0,1,16],profit:16,programmat:13,progress:10,project:[2,13],promot:16,prone:5,properli:10,properti:[1,2,4,5,7,8,12,13,14],prototyp:13,provid:[0,5,10,12,13,16],publicli:16,publish:0,pull:14,pump:12,purpos:[5,13,16],put:14,pymatgen:[12,13],pypi:14,python:[6,10,15],question:7,quick:[1,14],quicker:12,quit:0,r_max:7,rais:7,random:[2,7,13],random_st:7,randomforestregressor:2,rang:2,rate:7,raw:2,read:5,readabl:[1,12],readi:[0,1,7],real:[0,12],reason:5,rebat:7,receipt:16,recogn:5,recommend:[0,1,5,12,13],record:13,recurs:[7,10],redistribut:16,reduc:[0,1,7],reducer_param:7,reduct:[0,7,12,14],refer:[13,14],refract:13,refresh_df_init:6,regardless:[0,1,7],regent:16,regress:[0,1,2,7,10,12,13],regression_or_classif:10,regressor:[0,2,3],rel:[7,12],relat:[3,11],releas:15,relev:7,relief:7,relieff:7,remain:[1,7],remind:14,remov:[0,3,5,7,12,13],remove_featur:7,removed_featur:[5,7],renam:7,replac:[0,7],report:14,repositori:[12,13,15,18],reproduc:[14,16],request:14,requir:[0,1,5,12,14,16],research:14,reserv:16,resolv:8,resourc:1,restrict:0,result:[1,2,5,7,12,13],retain:[7,16],retained_featur:7,retriev:13,return_attrs_recurs:10,right:16,rm_correl:7,robustli:13,roc:13,rocauc:13,rough:0,routin:12,row:13,royalti:16,rtype:[2,4],run:[1,2,7,9,12,14],runtest:[4,6,8,9,11],sai:0,same:[0,1,2,5,7,12],sampl:[0,7,8,12,13,14],save:[1,2,4,5,10,13,14],save_dict_to_fil:10,saver:14,scheme:[0,2,7],scienc:[13,14],scikit:[12,13],score:[0,2,7,10,13],scoring_funct:10,search:[13,14],second:[7,10],section:[0,12,13],see:[0,1,5,10,12,13,14],seed:13,select:[1,5,7,13],selected_featur:7,selector:3,self:[1,5],separ:[14,16],sequenti:7,seri:[7,10],serial:[1,2],serializ:[2,4],servic:16,set:[0,1,2,4,6,7,8,9,11,12,13,14,17],set_fit:[1,2,10],setup:[4,6,8,9,11,14],sever:13,shall:16,should:[1,2,4,5,7,8,10,12],show:0,shuffl:[0,13],shy:14,similar:[2,5,12],simpl:7,simpli:0,sinc:7,singl:[1,2,5],singlepipelineadaptor:[0,1,2,4],site:5,sitedo:5,size:14,skip:9,skippabl:9,sklearn:[0,1,2,7,10],skrebat:7,small:14,smaller:10,softwar:[16,18],some:[1,3,9,10,12,13,14],someth:[8,12,14],sort:7,sourc:[1,14,16],span:13,special:16,specif:[1,5,9,10,16],specifi:[0,1,2,5,7,12,15],split:[0,13],standard:[0,5],start:[0,12],state:[5,14],statist:0,stdout:[10,12],steel:13,step:[1,13],still:7,stop:10,store:[1,12,13],str:[1,2,4,5,6,7,9,10],straightforward:[2,4],stratifiedkfold:[0,13],strength:13,strict:16,string:[1,2,4,5,7,8,10,12],structur:[0,1,3,5,6,12,13],structure_col:[5,6],structurefeatur:5,stuck:14,style:[2,16],subject:16,sublicens:16,sublist:5,submiss:14,submit:14,submodul:17,subpackag:17,subset:[5,7],substitut:16,successfulli:12,suit:[0,9],summar:[1,12,14],summari:[12,13],superced:0,supervis:13,support:[10,15],suppress:1,supress_version_mismatch:1,sure:[1,2,12],swallow:10,syntax:[0,2,12],system:12,tabl:[13,14],tag:13,take:[6,7,13],taken:3,target:[0,1,2,4,7,8,10,12,13,14],target_kei:7,target_properti:1,task:14,teardown:[6,11],techniqu:[0,7,14],tell:[12,14],test:[0,1,2,5,7,10,13,14,17],test_adaptor:[1,2],test_bandstructure_featur:6,test_bas:[1,2,5,17],test_baseestim:4,test_baseestimator_classif:4,test_cach:6,test_caching_powerup:9,test_classif:4,test_column_attr:6,test_compare_column:11,test_composition_featur:6,test_cor:[1,5,7],test_dataclean:8,test_datacleaner_big_nan_handler_warn:8,test_datacleaner_emergency_na_transform_imput:8,test_datacleaner_feature_na_method:8,test_datacleaner_na_method_feature_sample_interact:8,test_datacleaner_sample_na_method:8,test_debug:9,test_debug_singl:9,test_df:[0,8],test_dfmladaptor:4,test_dftransform:9,test_dftransformer_baseestimator_behavior:9,test_dos_featur:6,test_exclude_by_us:6,test_express:9,test_express_singl:9,test_feature_mismatch:4,test_featurereducer_advanc:8,test_featurereducer_bas:8,test_featurereducer_classif:8,test_featurereducer_combin:8,test_featurereducer_pca:8,test_featurereducer_transfer:8,test_featurize_bsdo:6,test_featurize_composit:6,test_featurize_structur:6,test_featurizers_by_us:6,test_fitting_decor:11,test_from_preset:9,test_fset:6,test_function:6,test_get_vers:11,test_heavi:9,test_instanti:9,test_is_greater_bett:11,test_log:[1,10],test_logger_initi:11,test_lower_corr_clf:8,test_manual_feature_reduct:8,test_miss:9,test_ml:[1,10],test_n_jobs_powerup:9,test_pipelin:[1,4,17],test_pkg:[1,10],test_precheck:6,test_predict:1,test_preset:[1,6,17],test_product:9,test_reb:8,test_regress:4,test_regression_or_classif:11,test_san:6,test_save_dict_to_fil:11,test_saving_feature_from_remov:8,test_set:[1,5],test_sets_not_empti:6,test_structure_featur:6,test_structurefeaturizers_needs_fit:6,test_training_onli:4,test_transfer:6,test_treebasedfeaturereduct:8,testadaptorbad:4,testadaptorgood:4,testallfeatur:6,testautofeatur:6,testbaseautomltransform:4,testbasetransform:9,testcas:[4,6,8,9,11],testfeaturereduct:8,testfeaturizerset:6,testlogtool:11,testmatpip:9,testmatpipepreset:9,testmatpipesetup:9,testmltool:11,testpackagetool:11,testpreprocess:8,testsinglepipelineadaptor:4,testtpotadaptor:4,testtransformerbad:9,testtransformergood:9,text:[10,12,14],than:[1,5,7,12],thei:[0,5],them:[0,7],theori:16,thereof:16,thermodynam:14,thi:[0,1,2,3,5,6,7,8,10,12,13,14,16,18],thing:0,those:[6,7],though:[2,4,5,12],thousand:5,three:13,threshold:[7,12],through:[0,7,13,14,15,16],time:[7,12,13,14],timeli:1,timestamp:12,titl:13,to_numer:7,too:0,tool:[7,10,12,13,14],top:[0,7,9,12,13],tort:16,total:7,tpot:[0,1,2,3,10],tpot_config:[1,2],tpot_kwarg:2,tpotadaptor:[0,1,2,12],tpotbas:2,tpotclassifi:[2,4],tpotregressor:2,track:14,train:[0,1,2,7,13,14],train_df:[12,14],training_df:1,transferr:1,transform:[0,1,2,5,7,8,9,10,11,12],transform_kwarg:[1,2],transformermixin:1,tree:[1,7,12],tree_importance_percentil:7,tree_model:7,treefeaturereduc:[7,12],troubleshoot:18,troublesom:7,tune:[0,14],tupl:7,tutori:[12,14],two:7,txt:10,type:[1,2,4,5,6,7,8,9,10,11,12,13],typic:12,ultra:5,unabl:8,uncommon:7,under:[14,16],undergo:5,understand:14,unfair:0,uniqu:2,unit:13,unitless:13,unittest:[4,6,8,9,11],univers:16,unknown:[12,14],unknown_df:[1,14],unless:[2,4],updat:6,upgrad:[1,16],url:13,usag:[5,13,14],use:[0,1,2,3,5,6,7,12,13,14,15,16],used:[0,1,2,4,5,7,10,12,13,14,16],useful:[5,14],user:[0,1,5,15],uses:[0,1,14],using:[0,1,2,3,7,12,13,14],util:[1,17],valid:[0,5,7,13],valu:[1,5,7,12],valv:12,variabl:[7,13],variou:[1,7],vector:5,veri:[0,1,12],verif:13,verifi:13,version:[1,5,10,15],versionerror:10,via:[1,5,7,13,15],view:13,virtual:15,wai:[0,1,12,13,14,16],wang:14,want:[0,1,2,3,5,9,10,12,13,14],warn:[0,7,8,12],warranti:16,were:[0,7,12],what:12,whatsoev:16,when:[0,1,2,6,8,10,12],where:[0,1,8,9,10,12,14],whether:[1,2,5,7,10,16],which:[0,1,2,4,5,7,8,10,12,13,14],wide:13,window:15,within:[12,13],without:[0,7,10,16],work:[0,1,5,6,7,12,16],worri:10,wors:7,would:12,wrapper:[2,5,7,10],write:[0,12],written:[10,16],wrong:8,xgb:1,xgbclassifi:0,xgboost:[0,1],xgbregressor:0,yaml:[10,12],yes:13,yield:13,yml:10,you:[0,1,2,5,9,10,12,13,14,15,16,18],your:[0,14,16],zero:7,zip:13},titles:["Advanced Usage","automatminer package","automatminer.automl package","automatminer.automl.config package","automatminer.automl.tests package","automatminer.featurization package","automatminer.featurization.tests package","automatminer.preprocessing package","automatminer.preprocessing.tests package","automatminer.tests package","automatminer.utils package","automatminer.utils.tests package","Basic Usage","MatBench v0.1 benchmark","automatminer documentation","Installation","License","automatminer","Tutorials and Support"],titleterms:{"new":14,Using:[0,12],access:13,adaptor:2,advanc:0,algorithm:13,api:14,automatmin:[1,2,3,4,5,6,7,8,9,10,11,14,17],automl:[2,3,4],base:[1,2,5],basic:12,benchmark:[0,13],cite:14,config:3,contact:14,content:[1,2,3,4,5,6,7,8,9,10,11],contribut:14,core:[5,7],custom:0,dataset:13,dftransform:0,differ:12,document:14,down:13,examin:12,featur:[5,6],feature_select:7,from:15,get:13,how:14,individu:0,info:13,initi:12,instal:15,later:12,leaderboard:13,licens:16,load:13,log:[10,12],make:12,manual:14,matbench:[13,14],modul:[1,2,3,4,5,6,7,8,9,10,11],monitor:12,overview:[13,14],packag:[1,2,3,4,5,6,7,8,9,10,11],pip:15,pipelin:[0,1,12],pkg:10,practic:0,predict:12,preprocess:[7,8],preset:[1,12],pypi:15,quick:12,remind:12,report:13,run:0,save:12,saver:0,set:5,sourc:15,submodul:[1,2,3,4,5,6,7,8,9,10,11],subpackag:[1,2,5,7,10],support:[14,18],task:13,test:[4,6,8,9,11],test_adaptor:4,test_bas:[4,6,9],test_cor:[6,8],test_log:11,test_ml:11,test_pipelin:9,test_pkg:11,test_preset:9,test_set:6,time:0,tool:0,tpot_config:3,train:12,tutori:18,usag:[0,12],user:14,using:15,util:[10,11],what:14,work:14,your:[12,13]}})