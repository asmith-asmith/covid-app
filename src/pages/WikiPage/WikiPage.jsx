import React, { Component } from 'react';
import './WikiPage.css'


class WikiPage extends Component {
    render() {
      return (
            <div className="Wiki">
                <div>
                    <h3>Covid Wiki</h3>
                    <p>1. A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.</p>
                    <p>2. On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”. There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans.</p>
                    <h4>How it Spreads</h4>
                    <p>1. The main route of transmission is respiratory droplets and close contact.</p>
                    <p>2. When you sneeze or cough, you send out droplets of fluid from your nose and mouth.</p>
                    <p>3. Those droplets can carry infections, and when they enter someone else's enter the eyes, nose or mouth, the infection can make them sick. This is the way the flu and many viruses are spread.</p>
                    <p>4. Most often, you need to be close to the person (within 6 feet) for it to spread this way.</p>
                    <p>5. There is the possibility of aerosol transmission when exposed to high concentration aerosol for a long time in a relatively closed environment.</p>
                    <p>6. The WHO has stated that the risk of spread from someone without symptoms is "very low" and that fecal transmission is "low".</p>
                </div>
            </div>
      );
    }
  }
  
  export default WikiPage;