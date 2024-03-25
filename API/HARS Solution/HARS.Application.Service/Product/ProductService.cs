using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using HARS.Application.Service.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Product
{
    public class ProductService : IProductService
    {
        public string? GetProduct(string? Json)
        {
            // Check if Json is null before calling FetchDerivedModel
            if (Json == null)
                return null;

            var model = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpProductSelCallAsQuery(json: Json));

            // Check if model is null before accessing FirstOrDefault()
            return model?.FirstOrDefault()?.Json;
        }

        public string? ProductTsk(string? Json)
        {
            // Check if Json is null before performing operations
            if (Json == null)
                return null;

            using (var adpater = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                // Pass Json as ref
                ActionProcedures.SpProductTsk(ref param, adpater);

                // Close the adapter before returning Json
                adpater.CloseConnection();

                return param;
            }
        }
    }
}
