        $(document).ready(function(){
            $("#submitButton").click(function() {
                cd = $("#VerticalCD").val();
                dh = $("#VerticalDiscHeight").val();
                mg = $("#lensUsed").val();
                
                // reset error messages
                $("#ErrorText").html("");
                $("#SuccessText").html("");
                
                error = "";
                if (! $.isNumeric(cd)) {
                    error = error + "<li>Please enter numbers and only numbers for cup-to-disc</li>";
                }
                
                if (! $.isNumeric(dh)) {
                    error = error + "<li>Please enter numbers and only numbers for vertical disc height</li>";
                }
                
                if (cd > 1) {
                    error = error + "<li>cup-to-disc ratio cannot be greater than 1</li>";
                }
                if (error) {
                    $("#ErrorText").html(error);
                    return;
                }
                
                dh = dh / mg;
                pi = Math.PI;
                da=pi*Math.pow(dh*0.5,2);
                ca=pi*Math.pow(dh*cd*0.5,2);
                ra=Math.round((da-ca)*100)/100;
                
                $("#SuccessText").html("Calculated Rim Area: " + ra + " mm<sup>2</sup>");
                // alert(cd + " " + dh + " " + mg);
            });
        });