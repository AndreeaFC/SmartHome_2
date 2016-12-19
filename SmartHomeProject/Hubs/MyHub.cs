using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace SmartHomeProject.Hubs
{
    public class MyHub : Hub
    {
        Random r = new Random();

        public MyHub()
        {
            var taskTimer = Task.Factory.StartNew(async () =>
            {
                while (true)
                {
                    int randomStatus = r.Next(0, 2);
                    int room = r.Next(0, 5);

                    string timeNow = DateTime.Now.ToString();
                    Clients.All.SendServerTime(timeNow);
                    if (randomStatus == 0)
                    {
                        string status = randomStatus.ToString();
                        status = "on";
                        Clients.All.LightsOn(room, status);
                    }
                    else
                    {
                        string status = randomStatus.ToString();
                        status = "off";
                        Clients.All.LightsOn(room, status);
                    }

                    await Task.Delay(3000);
                }
            }, 

            TaskCreationOptions.LongRunning);
        }

        public void Hello()
        {
            Clients.All.hello();
        }
    }
}