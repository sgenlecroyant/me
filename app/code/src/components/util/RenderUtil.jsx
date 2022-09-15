import { Typography } from '@mui/material'
import './renderUtil.css'

import java from '../../assets/images/java.svg' 
import spring2 from '../../assets/images/spring 2.svg'
import mysql from '../../assets/images/mysql.svg'
import postgres from '../../assets/images/postgresql.svg'
import maven from '../../assets/images/maven.png'
import gradle from '../../assets/images/gradle 2.svg'
import kafka from '../../assets/images/kafka.svg'
import elasticsearch from '../../assets/images/elasticsearch.svg'
import kafkaStreams from '../../assets/images/kafka streams.png'
import javascript from '../../assets/images/javascript.svg'
import typeScript from '../../assets/images/typescript.svg'
import reactjs from '../../assets/images/reactjs green.svg'
import materialUI from '../../assets/images/material ui.svg'
import redux from '../../assets/images/redux.svg'
import docker from '../../assets/images/docker-fill.svg'
import jenkins from '../../assets/images/jenkins.svg'
import git from '../../assets/images/git.svg'
import github from '../../assets/images/github.svg'
import hibernateLogo from '../../assets/images/hibernate-logo.svg'
import hibernateWhiteIcon from '../../assets/images/hibernate_icon_whitebkg.svg'

export class RenderUtil {

    static tabs = {
        BACKEND: "Backend",
        FRONTEND: "Frontend",
        BIG_DATA_PROCESSING: "Big Data Processing",
        ORM_TOOLS: "ORM Tools",
        CONTAINER_ORCHESTRATION: "Containeriza/Orchestration",
        CI_CD: "CI/CD",
        GIT_GITHUB: "VCS"
    }

    static testRender = (data) => {
        console.log(data)
        return data
    }

    static renderTabDetails = (tabName) => {
        if (tabName === this.tabs.BACKEND) {
            return (
                <div className='tab-details'>
                    <div className='box'>
                        <div className="tab-sub-title">Languages</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={java} />
                        </div>
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>Frameworks</div>
                        <div className='tab-content'>
                            <div>
                                <img className='tech-name' src={spring2} />
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>Databases</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={mysql} />
                            <img className='tech-name' src={postgres} />
                        </div>
                        <div>
                            <img id='elasticsearch' className='tech-name' src={elasticsearch} />
                        </div>
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>Build Tools</div>
                        <div className='tab-content'>
                            <div className='build-tools'>
                                <img className='tech-name' src={maven} />
                                <img className='tech-name' src={gradle} />
                            </div>
                        </div>
                        {/* <div className='tab-content'>
                        <img className='tech-name' src='/assets/images/gradle 2.svg'/>
                        </div> */}
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>Messaging Systems</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={kafka} />
                        </div>
                    </div>
                </div>
            )
        } else if (tabName === this.tabs.FRONTEND) {
            return (
                <div className='tab-details'>
                    <div className='box'>
                        <div >
                            <div className="tab-sub-title">Languages</div>
                            <div className='tab-content'>
                                <div className='frontend-languages'>
                                    <img className='tech-name' src={javascript} />
                                    <img className='tech-name' src={typeScript} />
                                </div>
                            </div>
                            <div className='tab-content'>
                                {/* <img className='tech-name' src='/assets/images/typescript.svg'/> */}
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className="tab-sub-title">Frameworks</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={reactjs} />
                        </div>
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>UI styling engines</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={materialUI} />
                        </div>
                    </div>
                    <div className='box'>
                        <div className='tab-sub-title'>ASM Tools</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={redux} />
                        </div>
                    </div>
                    {/* //made this commented out for a while */}
                    {/* <div className='box'>
                        <div className='tab-sub-title'>HTTP Clients</div>
                        <div className='tab-content'>Axios & Fetch API</div>
                    </div> */}
                </div>
            )

        } else if (tabName === this.tabs.CONTAINER_ORCHESTRATION) {
            return (
                <div className='tab-details'>
                    <div className='box'>
                        <div>
                            <div className="tab-sub-title">Tools</div>
                            <div className='tab-content'>
                                <span> <img className='tech-name' src={docker} /></span>
                                {/* <span> <img className='tech-name' src='/assets/images/kubernetes.svg' /></span> */}
                            </div>
                            <Typography component={'div'} color={'gray'} >
                                <div className='containerization'>
                                    ~ {`<<planning to explore KUBERNETES and any Cloud Service Provider in a year>>`} <br/><br/>
                                    Application deployment made easy and simple through
                                    containers irrespective of the environment weather on cloud,
                                    on premises and even on development environment of the local machine, <strong>  <i>if it works, it works for everyone and everywhere</i> </strong>
                                </div>
                            </Typography>
                        </div>
                    </div>
                </div>
            )

        } else if (tabName === this.tabs.BIG_DATA_PROCESSING) {
            return (
                
                <div className='tab-details'>
                    <div className='box'>
                        <div >
                            <div className="tab-sub-title">Languages</div>
                            <div className='tab-content'>
                                <img className='tech-name' src={java} />
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className="tab-sub-title">Frameworks</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={kafkaStreams} />
                            <Typography component={'div'} color={'gray'} style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>
                                <div className='containerization'>
                                Kafka Streams  is the Big Data Processing framework which is relatively new to
                                the game, it got matured back in 2017 and it has grown amazingly faster.
                                 <br />
                                Built on top of the Apache Kafka Messaging System, which is the top choice for building data pipelines for Big Data Processig,
                                and it is one of the top contenders with Apache Flink, NiFi, Hadoop, and Apache Spark Streaming. Kafka Streams uses the KAPPA architecture, which is true stream-processing,
                                </div> 
                            </Typography>
                        </div>
                    </div>
                </div>
            )

        }else if(tabName === this.tabs.ORM_TOOLS){
            return (
                <div className='tab-details'> 
                    <div className='box'>
                        <div>
                            <div className="tab-sub-title">Tools</div>
                            <div className='tab-content'>
                                <img className='tech-name' src={hibernateLogo} alt="orm tools" />
                                <img className='tech-name' src={hibernateWhiteIcon} alt="orm tools" />
                                <Typography component={'div'} className='jenkins' color={'gray'}>
                                <div className='containerization'>
                                    ORMs help developing data driven apps quickly and efficiently.
                                    they also help work with databases intelligently by following the imperative approach.
                                    Using JPA as the specification makes loose-coupling possible while Hibernate is the implementation engine alongside other
                                    tools like Eclipse Link, ...
                                </div>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (tabName === this.tabs.CI_CD) {
            return (
                <div className='tab-details'>
                    <div className='box'>
                        <div>
                            <div className="tab-sub-title">Tools</div>
                            <div className='tab-content'>
                                <img className='tech-name' src={jenkins} />
                                <Typography component={'div'} className='jenkins' color={'gray'}>
                                    <div className='containerization'>
                                    Jenkins is a the powerful automation server which can be used to
                                    automate some of the software development processes for CI/CD pipelines for workflow automation such as testing and deployment
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else if (tabName === this.tabs.GIT_GITHUB) {
            return (
                <div className='tab-details'>
                    <div className='box'>
                        <div className='tab-sub-title'>Tools</div>
                        <div className='tab-content'>
                            <img className='tech-name' src={git} />
                            <img className='tech-name' src={github} />
                            <Typography>
                            <div className='containerization'>
                                Source code hosting and source code version control systems play a big role in software development,
                                and Git is one of the most popular ones out there, Github as its web client is also powerful and pretty handy
                            </div>
                            </Typography>
                        </div>
                    </div>
                </div>
            )
        }
    }
}